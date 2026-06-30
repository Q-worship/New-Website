interface Env {
  ASSETS: Fetcher
  CHAT_API: Fetcher
}

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
}

function withCors(response: Response): Response {
  const headers = new Headers(response.headers)
  for (const [key, value] of Object.entries(corsHeaders)) {
    headers.set(key, value)
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

async function proxyChatApi(request: Request, env: Env): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const response = await env.CHAT_API.fetch(request)
  return withCors(response)
}

function isSpaRoute(pathname: string): boolean {
  if (pathname === '/') return true
  const lastSegment = pathname.split('/').pop() ?? ''
  return !lastSegment.includes('.')
}

async function fetchAsset(request: Request, env: Env): Promise<Response> {
  let response = await env.ASSETS.fetch(request)

  if (response.status !== 404 || request.method !== 'GET') {
    return response
  }

  const url = new URL(request.url)
  if (!isSpaRoute(url.pathname)) {
    return response
  }

  const indexUrl = new URL('/index.html', url.origin)
  return env.ASSETS.fetch(new Request(indexUrl, request))
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname.startsWith('/api/chat')) {
      return proxyChatApi(request, env)
    }

    return fetchAsset(request, env)
  },
}
