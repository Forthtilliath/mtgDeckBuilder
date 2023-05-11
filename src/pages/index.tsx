import Head from 'next/head'
import Layout from '../components/layout'
import Gallery from '@/components/gallery'
import Card from '@/components/card'
import axios from 'axios'
import { store } from '@/lib/redux/store'
import { Provider } from 'react-redux'
import { InferGetServerSidePropsType } from 'next'

const siteTitle = 'MtgDeckBuilder - Home'

export default function Home({
      cards,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Gallery>
          {cards.map((cardData) => (
            <Card
              name={cardData.name}
              id={cardData.id}
              imgUrl={cardData.imageUrl}
              key={cardData.id}
            />
          ))}
        </Gallery>
      </Layout>
    </Provider>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get<API.CardData>(
    'https://api.magicthegathering.io/v1/cards'
  )
  const cards = data.cards.filter((cardData) => cardData.imageUrl)

  return {
    props: {
      cards,
    },
  }
}
