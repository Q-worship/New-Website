#!/usr/bin/env node
/**
 * Ensures CHAT_KV namespace IDs exist before chat worker deploy.
 * Skips when wrangler.toml already has real IDs; otherwise runs setup-chat-worker.mjs.
 */
import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const wranglerPath = path.join(root, 'workers/whatsapp-chat/wrangler.toml')
const PLACEHOLDER_ID = '00000000000000000000000000000001'

const toml = readFileSync(wranglerPath, 'utf8')

if (!toml.includes(PLACEHOLDER_ID)) {
  console.log('CHAT_KV namespaces already configured.')
  process.exit(0)
}

console.log('Placeholder KV IDs detected — creating CHAT_KV namespaces...')
execSync('node scripts/setup-chat-worker.mjs', {
  cwd: root,
  stdio: 'inherit',
})
