// Local long-polling runner to test @buddha_dhamma_bot directly
import handler from '../api/telegram.js'

const token = process.env.TELEGRAM_BOT_TOKEN || Buffer.from('OTE4MzYyNzgxNzpBQUhOcUg2M3A3dzdZZk43TzVDeXM1ZndFeUtrcFNmcV9KMA==', 'base64').toString('utf-8')

async function startPolling() {
  console.log('☸️ Starting Buddha Dhamma Telegram Bot in Local Polling mode...')

  // Delete webhook first to enable polling
  try {
    const delRes = await fetch(`https://api.telegram.org/bot${token}/deleteWebhook?drop_pending_updates=false`)
    const delJson = await delRes.json()
    console.log('Webhook deleted for polling:', delJson)
  } catch (err) {
    console.error('Failed to delete webhook:', err)
  }

  // Get bot profile info
  const meRes = await fetch(`https://api.telegram.org/bot${token}/getMe`)
  const me = await meRes.json()
  console.log(`🤖 Bot online: @${me.result?.username} (${me.result?.first_name})`)
  console.log('Waiting for messages on Telegram... Press Ctrl+C to stop.')

  let offset = 0
  while (true) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates?offset=${offset}&timeout=25`)
      const data = await res.json()

      if (data.ok && Array.isArray(data.result)) {
        for (const update of data.result) {
          offset = update.update_id + 1
          console.log(`[Update ${update.update_id}] Received message from @${update.message?.from?.username || update.message?.from?.first_name}: "${update.message?.text}"`)

          // Mock req and res for the handler
          const mockReq = {
            method: 'POST',
            body: update
          }
          const mockRes = {
            status: () => mockRes,
            json: (payload) => payload
          }

          await handler(mockReq, mockRes)
          console.log(`[Update ${update.update_id}] Answered successfully!`)
        }
      }
    } catch (err) {
      console.error('Polling loop error:', err.message)
      await new Promise(r => setTimeout(r, 2000))
    }
  }
}

startPolling()
