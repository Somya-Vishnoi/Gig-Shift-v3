const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? 'service_lm3rjmm'
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_0alg46p'
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? 'yZpmfwswhyWbfcUBE'

export interface EmailParams {
  to_name:     string
  to_email:    string
  role:        string
  zone?:       string
  company?:    string
  employee_id?: string
}

export async function sendWelcomeEmail(params: EmailParams): Promise<boolean> {
  try {
    const emailjs = await import('@emailjs/browser')
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_name:     params.to_name,
      to_email:    params.to_email,
      role:        params.role,
      zone:        params.zone        ?? '—',
      company:     params.company     ?? '—',
      employee_id: params.employee_id ?? '—',
      app_name:    'GigShift',
      app_url:     'https://gig-shift-v2.vercel.app',
    }, PUBLIC_KEY)
    return true
  } catch (err) {
    console.error('EmailJS error:', err)
    return false
  }
}
