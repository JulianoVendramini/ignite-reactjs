import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomeProps{
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  console.log(product);
  
  return (
    <>
    <Head>
      <title>Home ig.news</title>
    </Head>
    
    <main className={styles.contentContainer}>
      <section  className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News about the <span> world.</span></h1>
        <p>
          Get acess to all the publications <br />
          <span>for {product.amount} monthly</span>
        </p>
        <SubscribeButton priceId={product.priceId}/>
      </section>

      <img src="/images/avatar.svg" alt="Girl Coding"/>
    </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const price = await stripe.prices.retrieve('price_1JpFRSDH7XuX6pv4m1ZuJ6K9')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return{
    props: {
      product,
    }
  }
}