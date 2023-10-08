import Stripe from 'stripe'
import { env } from '~/config/env'

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
  appInfo: {
    name: 'Hack Sell',
  },
})
