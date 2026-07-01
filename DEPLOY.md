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

- Sign-up / email verification (`/api/auth/*`) — requires v2 auth API + `AUTH_API_ORIGIN` on the site Worker



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

   | `VITE_API_URL` | Build time | **Leave unset or empty** (recommended) |



   **Do not set** `VITE_CHAT_API_URL` or `VITE_API_URL` to external URLs unless you intentionally want cross-origin calls.



4. **Deploy the chat worker first** (`npm run deploy:chat-api`), then deploy the site (`npm run deploy:site` or push to GitHub). The service binding requires `qworship-whatsapp-chat` to exist before `new-website` deploys.



### Auth API proxy (`/api/auth/*`)



Sign-up and email verification call same-origin `/api/auth/signup`, `/api/auth/verify-email`, and `/api/auth/resend-verification`. The site Worker ([`workers/site/src/index.ts`](workers/site/src/index.ts)) forwards those requests to your deployed **Qworship v2 API** using the runtime variable `AUTH_API_ORIGIN`.



#### Your production topology



| Host | Role | `AUTH_API_ORIGIN` / env |

|------|------|-------------------------|

| `https://new-website.vianneycm.workers.dev` | Marketing site (this repo) | Set `AUTH_API_ORIGIN=https://app.qworship.com` on the **site Worker** |

| `https://app.qworship.com` | v2 Express API + MongoDB (same as main app) | `RESEND_API_KEY`, `EMAIL_FROM`, `MONGODB_URI`, `JWT_SECRET`, `NODE_ENV=production` |



[`wrangler.jsonc`](wrangler.jsonc) includes `vars.AUTH_API_ORIGIN` for deploys from this repo. You can override in the Cloudflare dashboard if needed.



1. Deploy the v2 auth API (Express) to a reachable HTTPS origin, e.g. `https://app.qworship.com` (must serve routes under `/api/auth/...`).

2. Open **Cloudflare Dashboard → Workers & Pages → your site project → Settings → Variables**

3. Add a **Worker** (runtime) variable:



   | Variable | When | Value |

   |----------|------|--------|

   | `AUTH_API_ORIGIN` | Runtime | Your v2 API origin, e.g. `https://api.qworship.com` (no trailing slash) |



4. Redeploy the site Worker after setting `AUTH_API_ORIGIN`.



**Local dev:** run the v2 server on port 5000 and `npm run dev`. Vite proxies `/api/auth` → `http://localhost:5000`. OTP codes are logged in the v2 server console (`[dev] Verification code for ...`).



If `AUTH_API_ORIGIN` is missing in production, sign-up returns HTTP 503 with a JSON error instead of a browser "Failed to fetch".



### OTP email (Resend — v2 API host only)



Verification codes are emailed by the **v2 Express server**, not the marketing site Worker. Set these on your v2 API host (Railway, Render, VPS, etc.):



| Variable | Required (prod) | Example |

|----------|-----------------|--------|

| `RESEND_API_KEY` | Yes | `re_...` from [resend.com](https://resend.com) → API Keys |

| `EMAIL_FROM` | Yes | `Qworship <verify@qworship.com>` — must be a verified domain in Resend |

| `MONGODB_URI` | Yes | Atlas or self-hosted connection string |

| `JWT_SECRET` | Yes | Long random string |

| `NODE_ENV` | Yes | `production` |



**Do not** put `RESEND_API_KEY` on the Cloudflare site Worker. See [`Qworship-v2/apps/server/.env.example`](Qworship-v2/apps/server/.env.example).



#### app.qworship.com server checklist



On the host running Express behind **https://app.qworship.com**, set:



| Variable | Notes |

|----------|--------|

| `MONGODB_URI` | Same database as the main app |

| `JWT_SECRET` | Auth token signing |

| `NODE_ENV` | `production` (enables Resend email) |

| `RESEND_API_KEY` | From [resend.com](https://resend.com) |

| `EMAIL_FROM` | e.g. `Qworship <verify@qworship.com>` — verified in Resend |



Deploy OTP auth from [`Qworship-v2/apps/server`](Qworship-v2/apps/server) to this host, then run the `curl` signup test in **Production deploy order** below.



**Local dev:** OTP is logged in the auth server terminal (`[dev] Verification code for ...`); Resend is not required unless you set `NODE_ENV=production`.



### Production deploy order (sign-up)



1. Resend: API key + verified sending domain (or sandbox `onboarding@resend.dev` for testing).

2. **app.qworship.com** (v2 API host): Deploy [`Qworship-v2/apps/server`](Qworship-v2/apps/server) with OTP + Resend env vars (see [`Qworship-v2/apps/server/.env.example`](Qworship-v2/apps/server/.env.example)). Smoke test:

   ```bash
   curl -X POST https://app.qworship.com/api/auth/signup \
     -H "Content-Type: application/json" \
     -d '{"firstName":"Test","lastName":"User","email":"you@example.com","password":"TestPass123!"}'
   ```

   Expected: `{"success":true,"email":"...","nextStep":"/verify"}` and OTP email (when Resend is configured).

3. **new-website** (marketing): `AUTH_API_ORIGIN=https://app.qworship.com` in [`wrangler.jsonc`](wrangler.jsonc) or Cloudflare dashboard; redeploy (`npm run deploy:site`).

4. Live test: `https://new-website.vianneycm.workers.dev/signup` → inbox → `/verify`.



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

# Terminal 1 — marketing site (port 5173)

npm run dev



# Terminal 2 — chat API (port 8787, requires wrangler login for Workers AI)

npm run dev:chat-api



# Terminal 3 — Qworship v2 auth API (port 5000, MongoDB)

npm run dev:auth-api

```



### Auth API + MongoDB (sign-up / verify)



The marketing site proxies `/api/auth/*` to the **Qworship v2 Express server** on port 5000. Users are stored in MongoDB only after OTP verification.



**One-time setup:**



```bash

cd Qworship-v2 && pnpm install

```



Ensure MongoDB is running locally (or set `MONGODB_URI` in `Qworship-v2/apps/server/.env`). Default database: `mongodb://127.0.0.1:27017/qworship-v2`.



Sign up on `http://localhost:5173/signup`; the 6-digit code appears in the v2 server terminal (`[dev] Verification code for ...`).



**Fallback (no MongoDB):** `npm run dev:auth-api:mock` runs an in-memory mock at `scripts/dev-auth-server.mjs`.



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

### Error 10064 — `ChatSession` Durable Object on site worker

Site deploy fails with:

```
New version of script does not export class 'ChatSession' which is depended on by existing Durable Objects [code: 10064]
```

`ChatSession` belongs on `qworship-whatsapp-chat`, not `new-website`. This happens if the chat worker was ever deployed against the site worker name.

**Fix:** [`wrangler.jsonc`](wrangler.jsonc) includes a one-time migration:

```jsonc
"migrations": [
  { "tag": "v1-remove-chat-session", "deleted_classes": ["ChatSession"] }
]
```

Commit, push, then redeploy (`npm run deploy:site` or re-run the **Unblock site deploy** workflow).

### Homepage 404 — site worker live but assets missing

`GET /` returns plain `Not found` while `/api/chat/health` still returns `{"ok":true}`.

The site Worker is running but the **ASSETS** binding has no `dist/` files (deploy failed or assets were never uploaded).

**Fix:**

1. Resolve any blocking deploy error (e.g. **10064** above).
2. Build and deploy: `npm run deploy:site` (runs `npm run build && wrangler deploy`).
3. Verify:

```bash
curl -sf https://new-website.YOUR_ACCOUNT_SUBDOMAIN.workers.dev/ | head -c 200 | grep -qi doctype
curl -sf https://new-website.YOUR_ACCOUNT_SUBDOMAIN.workers.dev/api/chat/health
```

Expected: HTML with `<!doctype` and `{"ok":true}`.

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


