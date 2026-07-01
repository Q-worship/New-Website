const RESEND_API_URL = 'https://api.resend.com/emails'
const DEFAULT_FROM = 'Qworship <onboarding@resend.dev>'

export async function sendOtpEmail(to: string, code: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }

  const from = process.env.EMAIL_FROM?.trim() || DEFAULT_FROM

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: 'Your Qworship verification code',
      html: `
        <p>Your verification code is:</p>
        <p style="font-size: 28px; font-weight: bold; letter-spacing: 4px;">${code}</p>
        <p>This code expires in 10 minutes. If you did not sign up for Qworship, you can ignore this email.</p>
      `,
      text: `Your Qworship verification code is ${code}. It expires in 10 minutes.`,
    }),
  })

  if (!response.ok) {
    let message = `Resend API error (${response.status})`
    try {
      const data = (await response.json()) as { message?: string }
      if (data.message) message = data.message
    } catch {
      // ignore JSON parse errors
    }
    throw new Error(message)
  }
}
