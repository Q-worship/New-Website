# Cloudflare deployment guide

This repo has **two** Cloudflare deployments:

| Component | How it deploys | Config |
|-----------|----------------|--------|
| React site (static) | **Cloudflare Pages** — auto-build on GitHub push | [`wrangler.jsonc`](wrangler.jsonc) |
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

## Step 1 — Cloudflare Pages environment variable

`VITE_CHAT_API_URL` is baked in at **build time**. Set it in the dashboard:

1. Open **Cloudflare Dashboard → Workers & Pages → your Pages project**
2. **Settings → Environment variables**
3. Add for **Production** (and Preview if desired):

   | Variable | Value |
   |----------|--------|
   | `VITE_CHAT_API_URL` | `https://qworship-whatsapp-chat.YOUR_ACCOUNT_SUBDOMAIN.workers.dev` |

   Copy the exact URL printed by `npm run deploy:chat-api`. The subdomain is your **Cloudflare account** workers.dev hostname — not the Pages project name (`new-website` in `wrangler.jsonc`).

   **Invalid (do not use):**
   - `https://qworship-whatsapp-chat.<new-website>.workers.dev` (angle brackets break fetch)
   - Any URL containing `<` or `>` characters

4. **Deployments → Retry deployment** (or push a new commit) so the build picks up the variable.

Without a valid URL, the chatbot skips the AI tier and WhatsApp API calls (rule-based FAQs still work).

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

Vite proxies `/api` to port 8787 in dev ([`vite.config.ts`](vite.config.ts)).

---

## Troubleshooting

### `ERR_QUIC_PROTOCOL_ERROR` or `Failed to fetch` on `/api/chat/sessions`

This means the browser cannot reach the chat worker. Common causes:

1. **Worker not deployed** — `npm run deploy:chat-api` must exit successfully. If local deploy fails (VPN, corporate proxy, certificate errors), use the GitHub Action with `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets instead.

2. **Wrong `VITE_CHAT_API_URL`** — use the URL printed by deploy output, not the Pages project name.

   | Wrong | Right |
   |-------|-------|
   | `https://qworship-whatsapp-chat.new-website.vianneycm.workers.dev` | `https://qworship-whatsapp-chat.vianneycm.workers.dev` |

   `new-website` is the Pages site name in [`wrangler.jsonc`](wrangler.jsonc). It is **not** part of the worker hostname unless deploy output explicitly includes it.

3. **Placeholder KV** — run `npm run setup:chat-api` before first deploy so [`wrangler.toml`](workers/whatsapp-chat/wrangler.toml) has real KV namespace ids (not `00000000000000000000000000000001`).

4. **Pages not redeployed** — after changing `VITE_CHAT_API_URL`, retry the Pages deployment so the new URL is baked into the build.

### `ERR_NAME_NOT_RESOLVED` and `%20` in the request URL

If DevTools shows requests like `https://qworship-whatsapp-chat.vianneycm.workers.dev%20/api/chat/...`, the `%20` is a **trailing space** in `VITE_CHAT_API_URL`.

1. Open **Cloudflare Pages → Settings → Environment variables**
2. Edit `VITE_CHAT_API_URL` — value must be exactly `https://qworship-whatsapp-chat.vianneycm.workers.dev` with **no leading/trailing spaces** and no trailing slash
3. **Retry deployment** so the build picks up the corrected value

The app trims whitespace at runtime, but fixing the env var avoids confusion and keeps builds clean.

### Verify the worker is live

After deploy:

```bash
curl https://qworship-whatsapp-chat.YOUR_ACCOUNT_SUBDOMAIN.workers.dev/api/chat/health
```

Expected response: `{"ok":true}`

If health check fails, fix worker deploy before updating Pages env vars.

### Local deploy blocked by VPN or proxy

Wrangler may warn about corporate proxy certificate mismatch. Options:

- Install your corporate root CA and set `NODE_EXTRA_CA_CERTS` to that cert file
- Deploy from a network without the proxy
- Push to `main` and let [`.github/workflows/deploy-chat-api.yml`](.github/workflows/deploy-chat-api.yml) deploy using GitHub secrets
