# Cloudflare deployment guide

This repo has **two** Cloudflare deployments:

| Component | How it deploys | Config |
|-----------|----------------|--------|
| React site (static + API proxy) | **Cloudflare Pages** — auto-build on GitHub push | [`wrangler.jsonc`](wrangler.jsonc), [`functions/api/chat/[[path]].ts`](functions/api/chat/[[path]].ts) |
| Chat API (FAQ AI + WhatsApp) | **Cloudflare Worker** — manual or GitHub Action | [`workers/whatsapp-chat/wrangler.toml`](workers/whatsapp-chat/wrangler.toml) |

## What works after a GitHub push (Pages only)

- Static site and UI
- Chatbot rule-based FAQ matching (client-side)
- Greetings and thanks

## What needs extra setup

- AI paraphrase FAQ resolution (`/api/chat/faq-resolve`)
- Live agent chat in the widget
- WhatsApp webhooks

---

## Step 1 — Cloudflare Pages environment variables

The site uses a **same-origin API proxy** so the browser calls `/api/chat/*` on your Pages domain (no CORS). The Pages Function forwards those requests to the chat worker.

1. Open **Cloudflare Dashboard → Workers & Pages → your Pages project**
2. **Settings → Environment variables**
3. Add for **Production** (and Preview if desired):

   | Variable | When | Value |
   |----------|------|--------|
   | `CHAT_API_ORIGIN` | Runtime (Pages Function) | `https://qworship-whatsapp-chat.YOUR_ACCOUNT_SUBDOMAIN.workers.dev` |
   | `VITE_CHAT_API_URL` | Build time | **Leave unset or empty** (recommended) |

   Copy the worker URL from `npm run deploy:chat-api` output. The subdomain is your **Cloudflare account** workers.dev hostname — not the Pages project name (`new-website` in `wrangler.jsonc`).

   **Do not set** `VITE_CHAT_API_URL` to the worker URL unless you intentionally want cross-origin calls (can trigger CORS issues).

4. **Deployments → Retry deployment** after changing variables.

Without `CHAT_API_ORIGIN`, the proxy returns 502 and the chatbot falls back to the WhatsApp link.

### Alternative: cross-origin worker URL (not recommended)

If you set `VITE_CHAT_API_URL` at build time to the worker URL, the browser calls the worker directly. The worker must be deployed with CORS headers (included in this repo). Prefer the same-origin proxy instead.

---

## Step 2 — Deploy the chat worker

### First-time setup

```bash
wrangler login
node scripts/setup-chat-worker.mjs
```

The setup script creates KV namespaces and prints IDs to paste into `workers/whatsapp-chat/wrangler.toml`.

Then set secrets (prompts for each value):

```bash
cd workers/whatsapp-chat
wrangler secret put WHATSAPP_TOKEN
wrangler secret put WHATSAPP_APP_SECRET
wrangler secret put WHATSAPP_VERIFY_TOKEN
wrangler secret put WHATSAPP_AGENT_PHONE
wrangler secret put AGENT_API_KEY
```

Set `WHATSAPP_PHONE_NUMBER_ID` in [`workers/whatsapp-chat/wrangler.toml`](workers/whatsapp-chat/wrangler.toml) under `[vars]`.

### Deploy

```bash
npm run deploy:chat-api
```

Workers AI (`[ai]` binding) works on Cloudflare without a separate API key.

### CI deploy on push

Add these **GitHub repository secrets**:

| Secret | Purpose |
|--------|---------|
| `CLOUDFLARE_API_TOKEN` | API token with Workers edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID |

The workflow [`.github/workflows/deploy-chat-api.yml`](.github/workflows/deploy-chat-api.yml) deploys the worker when chat-related files change on `main`.

---

## Step 3 — Meta WhatsApp webhook

After the worker is deployed, in **Meta Developer → WhatsApp → Configuration → Webhook**:

| Field | Value |
|-------|--------|
| Callback URL | `https://qworship-whatsapp-chat.YOUR_ACCOUNT_SUBDOMAIN.workers.dev/webhooks/whatsapp` |
| Verify token | Same string as `WHATSAPP_VERIFY_TOKEN` |
| Subscribed fields | `messages` |

Use the **worker** URL, not your Pages site URL.

Full Meta setup details: [`workers/whatsapp-chat/README.md`](workers/whatsapp-chat/README.md).

---

## Local development

```bash
# Terminal 1
npm run dev

# Terminal 2 (requires wrangler login for Workers AI)
npm run dev:chat-api
```

Copy [`.env.example`](.env.example) to `.env`:

```
VITE_CHAT_API_URL=http://localhost:8787
```

Or leave `VITE_CHAT_API_URL` unset — Vite proxies `/api` to port 8787 in dev ([`vite.config.ts`](vite.config.ts)).

---

## Troubleshooting

### CORS blocked on `/api/chat/sessions`

If DevTools shows a CORS error from `new-website.*` to `qworship-whatsapp-chat.*`:

1. **Remove** `VITE_CHAT_API_URL` from Pages build env (use same-origin proxy).
2. **Set** `CHAT_API_ORIGIN` to the worker URL (runtime env).
3. **Redeploy** Pages so [`functions/api/chat/[[path]].ts`](functions/api/chat/[[path]].ts) is active.

After fix, requests should go to `https://your-pages-site.workers.dev/api/chat/sessions` (same origin).

### `ERR_QUIC_PROTOCOL_ERROR` or `Failed to fetch` on `/api/chat/sessions`

This means the chat API is unreachable. Common causes:

1. **Worker not deployed** — `npm run deploy:chat-api` must exit successfully. If local deploy fails (VPN, corporate proxy, certificate errors), use the GitHub Action with `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets instead.

2. **`CHAT_API_ORIGIN` not set** — the Pages proxy needs this runtime variable pointing at the worker.

3. **Placeholder KV** — run `npm run setup:chat-api` before first deploy so [`wrangler.toml`](workers/whatsapp-chat/wrangler.toml) has real KV namespace ids (not `00000000000000000000000000000001`).

4. **Pages not redeployed** — after changing env vars, retry the Pages deployment.

### Agent-search loader skips straight to WhatsApp

The chatbot calls `GET /api/chat/health` before showing the loader. If health fails, it skips the animation and shows the WhatsApp link immediately. Fix worker deploy and `CHAT_API_ORIGIN` first.

### `ERR_NAME_NOT_RESOLVED` and `%20` in the request URL

If DevTools shows requests like `https://qworship-whatsapp-chat.vianneycm.workers.dev%20/api/chat/...`, the `%20` is a **trailing space** in `VITE_CHAT_API_URL`.

1. Open **Cloudflare Pages → Settings → Environment variables**
2. Remove `VITE_CHAT_API_URL` (preferred) or fix trailing spaces
3. **Retry deployment**

### Verify the worker is live

After deploy:

```bash
curl https://qworship-whatsapp-chat.YOUR_ACCOUNT_SUBDOMAIN.workers.dev/api/chat/health
curl -X OPTIONS -i https://qworship-whatsapp-chat.YOUR_ACCOUNT_SUBDOMAIN.workers.dev/api/chat/sessions
```

Expected health response: `{"ok":true}`

OPTIONS should return `Access-Control-Allow-Origin: *`.

If health check fails, fix worker deploy before updating Pages env vars.

### Local deploy blocked by VPN or proxy

Wrangler may warn about corporate proxy certificate mismatch. Options:

- Install your corporate root CA and set `NODE_EXTRA_CA_CERTS` to that cert file
- Deploy from a network without the proxy
- Push to `main` and let [`.github/workflows/deploy-chat-api.yml`](.github/workflows/deploy-chat-api.yml) deploy using GitHub secrets
