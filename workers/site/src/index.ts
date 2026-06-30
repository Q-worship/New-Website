interface Env {
  ASSETS: Fetcher
  CHAT_API_ORIGIN?: string
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

  const origin = env.CHAT_API_ORIGIN?.trim().replace(/\/$/, '')
  if (!origin) {
    return new Response(JSON.stringify({ error: 'CHAT_API_ORIGIN not configured' }), {
      status: 502,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    })
  }

  const requestUrl = new URL(request.url)
  const targetUrl = `${origin}${requestUrl.pathname}${requestUrl.search}`

  const proxyHeaders = new Headers()
  const contentType = request.headers.get('Content-Type')
  if (contentType) {
    proxyHeaders.set('Content-Type', contentType)
  }
  const authorization = request.headers.get('Authorization')
  if (authorization) {
    proxyHeaders.set('Authorization', authorization)
  }

  const proxyInit: RequestInit = {
    method: request.method,
    headers: proxyHeaders,
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    proxyInit.body = await request.text()
  }

  const response = await fetch(targetUrl, proxyInit)
  return withCors(response)
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname.startsWith('/api/chat')) {
      return proxyChatApi(request, env)
    }

    return env.ASSETS.fetch(request)
  },
}
