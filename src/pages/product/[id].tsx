import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe'
import Head from 'next/head'
import Image from 'next/image'

import { api } from '~/services/api'

import { stripe } from '~/services/stripe'
import { ProductContainer } from '~/styles/pages/product'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  async function handleByProduct() {
    try {
      const response = await api.post('/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <ProductContainer>
      <Head>
        <title>{product.name} | Asgard</title>
      </Head>
      <div className="product">
        <div className="product-image">
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button type="button" onClick={handleByProduct}>
            Buy
          </button>
        </div>
      </div>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        description: product.description,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
