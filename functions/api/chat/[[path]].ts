/// <reference types="@cloudflare/workers-types" />

interface Env {
  CHAT_API_ORIGIN?: string
}

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400',
}

function pathSegments(params: Record<string, string | string[] | undefined>): string {
  const path = params.path
  if (!path) return ''
  return Array.isArray(path) ? path.join('/') : path
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env, params } = context

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

  const suffix = pathSegments(params as Record<string, string | string[] | undefined>)
  const requestUrl = new URL(request.url)
  const targetUrl = `${origin}/api/chat/${suffix}${requestUrl.search}`

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
  const responseHeaders = new Headers(response.headers)
  for (const [key, value] of Object.entries(corsHeaders)) {
    responseHeaders.set(key, value)
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  })
}
