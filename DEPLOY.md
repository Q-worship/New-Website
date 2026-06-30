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
   | `VITE_CHAT_API_URL` | `https://qworship-whatsapp-chat.<your-subdomain>.workers.dev` |

   Use the URL printed after `npm run deploy:chat-api` (worker name is `qworship-whatsapp-chat`).

4. **Deployments → Retry deployment** (or push a new commit) so the build picks up the variable.

Without this, the chatbot skips the AI tier and WhatsApp handoff API calls.

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
| Callback URL | `https://qworship-whatsapp-chat.<your-subdomain>.workers.dev/webhooks/whatsapp` |
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
