import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '~/services/stripe'
import { SuccessContainer } from '~/styles/pages/success'

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <SuccessContainer>
      <Head>
        <title>Compra efetuada | Asgard</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="content">
        <h1>Compra efetuada!</h1>

        <div className="image-product">
          <Image src={product.imageUrl} width={120} height={110} alt="" />
        </div>

        <p>
          Yeah <strong>{customerName}</strong>, your access{' '}
          <strong>{product.name}</strong> is here: <br />
          <strong>key_8b23r8yu7hr8yufgh8yhb</strong>
        </p>

        <Link href="/">Click here to back</Link>
      </div>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
