import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '214753617:a74497a05c605e16f85d387acb30568f'
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '214753617'
// const WEBHOOK_URL = 'https://d3d.herocontent.ai/webhook/tilda' // Disabled for now

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessName, phone, email, businessType } = body

    // Validate required fields
    if (!businessName || !phone || !email || !businessType) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Format the business type for display
    const businessTypeMap: Record<string, string> = {
      restaurace: 'Restaurace',
      kavarna: 'Kavárna',
      'pub-bar': 'Pub, bar',
      rozvoz: 'Rozvoz',
      jine: 'Jiné'
    }

    const businessTypeDisplay = businessTypeMap[businessType] || businessType

    // Format message for Telegram
    const message = `🔔 *Nová žádost o kontakt - HeroContent*

📋 *Název podniku:* ${businessName}
📞 *Telefon:* ${phone}
📧 *Email:* ${email}
🏢 *Typ podniku:* ${businessTypeDisplay}

_Čas: ${new Date().toLocaleString('cs-CZ')}_`

    // Prepare webhook payload (disabled for now)
    // const webhookPayload = {
    //   businessName,
    //   phone,
    //   email,
    //   businessType: businessTypeDisplay,
    //   timestamp: new Date().toISOString(),
    // }

    // Send to Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    // Check Telegram response
    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json().catch(() => ({}))
      console.error('Telegram API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to send message to Telegram' },
        { status: 500 }
      )
    }

    // Webhook disabled for now
    // const webhookResponse = await fetch(WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(webhookPayload),
    // })
    // if (!webhookResponse.ok) {
    //   const errorText = await webhookResponse.text().catch(() => 'Unknown error')
    //   console.error('Webhook error:', errorText)
    // }

    // Return success even if one of the services fails (graceful degradation)
    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

