import { NextApiRequest, NextApiResponse } from 'next'
import { env } from '~/config/env'
import { stripe } from '~/services/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { priceId } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method is not allowed.' })
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Price not found.' })
  }

  const successUrl = `${env.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${env.APP_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  return res.status(201).json({ checkoutUrl: checkoutSession.url })
}
