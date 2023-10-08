import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '~/services/stripe'

import { HomeContainer } from '~/styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    description: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  return (
    <HomeContainer>
      <Head>
        <title>Home | Asgard</title>
      </Head>
      <h1>Asgard</h1>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={String(product.id)}>
            <Image
              src={product.imageUrl}
              width={200}
              height={200}
              alt={product.name}
            />

            <div className="info">
              <div className="name">{product.name}</div>
              <div className="price">{product.price}</div>
            </div>
            <Link href={`/product/${product.id}`} prefetch={false}>
              Buy
            </Link>
          </div>
        ))}
      </div>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      description: product.description,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
