# Cloudflare deployment guide



This repo has **two** Cloudflare deployments:



| Component | How it deploys | Config |

|-----------|----------------|--------|

| React site (static + API proxy) | **Cloudflare Worker** (static assets + site worker) — auto-build on GitHub push | [`wrangler.jsonc`](wrangler.jsonc), [`workers/site/src/index.ts`](workers/site/src/index.ts) |

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



## Step 1 — Site build environment variables



The site uses a **same-origin API proxy** so the browser calls `/api/chat/*` on your site domain (no CORS). The site Worker ([`workers/site/src/index.ts`](workers/site/src/index.ts)) forwards those requests to the chat worker via a **Service Binding** defined in [`wrangler.jsonc`](wrangler.jsonc):



```jsonc
"services": [
  { "binding": "CHAT_API", "service": "qworship-whatsapp-chat" }
]
```



No `CHAT_API_ORIGIN` env var is needed — Worker-to-Worker HTTP fetch on the same account causes error **1042**; the service binding avoids that.



1. Open **Cloudflare Dashboard → Workers & Pages → your site project**

2. **Settings → Environment variables**

3. For **Production** (and Preview if desired):



   | Variable | When | Value |

   |----------|------|--------|

   | `VITE_CHAT_API_URL` | Build time | **Leave unset or empty** (recommended) |



   **Do not set** `VITE_CHAT_API_URL` to the worker URL unless you intentionally want cross-origin calls.



4. **Deploy the chat worker first** (`npm run deploy:chat-api`), then deploy the site (`npm run deploy:site` or push to GitHub). The service binding requires `qworship-whatsapp-chat` to exist before `new-website` deploys.



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



The workflow [`.github/workflows/deploy-chat-api.yml`](.github/workflows/deploy-chat-api.yml) deploys the chat worker on every push to `main` (requires the secrets above). You can also run it manually via **Actions → Deploy chat API worker → Run workflow**.

For Cloudflare Git-connected builds, set the **deploy command** to `npm run deploy:production` (or `npm run deploy`) so the chat worker deploys before the site on every build (see error **10143** in Troubleshooting).

> **Quick fix if chat worker already exists:** retry the failed Cloudflare build with the current `npx wrangler deploy` command — error 10143 only blocks site deploy when `qworship-whatsapp-chat` is missing.



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



### 405 Method Not Allowed on `/api/chat/faq-resolve` or `/api/chat/sessions`

POST requests return **405** when the static asset server handles `/api/chat/*` instead of the site Worker. Fix:

1. Ensure [`wrangler.jsonc`](wrangler.jsonc) has `main`, `ASSETS` binding, `run_worker_first: ["/api/chat/*"]`, and the `CHAT_API` service binding.
2. **Deploy** the chat worker first, then the site (`npm run deploy:site`).

Verify the proxy on your site URL (not the chat worker URL):

```bash
curl https://new-website.YOUR_ACCOUNT_SUBDOMAIN.workers.dev/api/chat/health
curl -X POST https://new-website.YOUR_ACCOUNT_SUBDOMAIN.workers.dev/api/chat/faq-resolve \
  -H "Content-Type: application/json" \
  -d '{"query":"do you have a free trial"}'
```

Expected: health `{"ok":true}`; faq-resolve returns JSON (not 405).

### Error 1042 on `/api/chat/health` or `/api/chat/faq-resolve`

Cloudflare error **1042** means the site Worker tried to `fetch()` another Worker on the same account via HTTP. Fix: use the **Service Binding** in [`wrangler.jsonc`](wrangler.jsonc) (already in this repo) — do not proxy via `CHAT_API_ORIGIN` HTTP fetch.

1. Confirm `services` binding points to `qworship-whatsapp-chat`.
2. Deploy chat worker, then site worker.
3. Remove any `CHAT_API_ORIGIN` variable from the dashboard (no longer used).

### Error 10143 — `CHAT_API` service binding worker not found

Site deploy fails with:

```
Service binding 'CHAT_API' references Worker 'qworship-whatsapp-chat' which was not found. [code: 10143]
```

The site Worker ([`wrangler.jsonc`](wrangler.jsonc)) binds to `qworship-whatsapp-chat`, which must exist **before** `new-website` can deploy.

**One-time bootstrap:**

1. Authenticate: `wrangler login` locally, or set GitHub secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
2. Create KV namespaces: `npm run setup:chat-api` (or let `ensure-chat-kv.mjs` run automatically in CI).
3. Deploy chat worker: `npm run deploy:chat-api`.
4. Retry the site deploy.

**Prevent recurrence (Cloudflare Git build):**

In **Workers & Pages → new-website → Settings → Build**:

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Deploy command | `npm run deploy:production` |

`deploy:production` runs `deploy:chat-api` (chat worker) then `wrangler deploy` (site). Cloudflare already runs the build step before deploy.

**Deploy order:** `setup:chat-api` → `deploy:chat-api` → site deploy.

### CORS blocked on `/api/chat/sessions`



If DevTools shows a CORS error from `new-website.*` to `qworship-whatsapp-chat.*`:



1. **Remove** `VITE_CHAT_API_URL` from build env (use same-origin proxy).

2. **Redeploy** the site so [`workers/site/src/index.ts`](workers/site/src/index.ts) is active (`npm run deploy:site` or push to GitHub).



After fix, requests should go to `https://your-pages-site.workers.dev/api/chat/sessions` (same origin).



### `ERR_QUIC_PROTOCOL_ERROR` or `Failed to fetch` on `/api/chat/sessions`



This means the chat API is unreachable. Common causes:



1. **Worker not deployed** — `npm run deploy:chat-api` must exit successfully. If local deploy fails (VPN, corporate proxy, certificate errors), use the GitHub Action with `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets instead.



2. **Chat worker not deployed** — the site Worker's `CHAT_API` service binding requires `qworship-whatsapp-chat` to exist. Run `npm run deploy:chat-api` first.



3. **Placeholder KV** — run `npm run setup:chat-api` before first deploy so [`wrangler.toml`](workers/whatsapp-chat/wrangler.toml) has real KV namespace ids (not `00000000000000000000000000000001`).



4. **Pages not redeployed** — after changing env vars, retry the Pages deployment.



### Agent-search loader skips straight to WhatsApp



The chatbot calls `GET /api/chat/health` before showing the loader. If health fails, it skips the animation and shows the WhatsApp link immediately. Deploy the chat worker and site worker (with service binding) first.



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


