import Head from 'next/head'
import Layout from '../components/layout'
import Gallery from '@/components/gallery'
import Card from '@/components/card'
import axios from 'axios'
import { Counter } from '@/components/counter'
import { store } from '@/lib/redux/store'
import { Provider } from 'react-redux'

const siteTitle = 'MtgDeckBuilder - Home'

interface CardData {
  id: string
  name: string
  imageUrl: string
}
interface Props {
  cards: Array<CardData>
}

export default function Home({ cards }: Props) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Counter />
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
  const { data } = await axios.get<{ cards: CardData[] }>(
    'https://api.magicthegathering.io/v1/cards'
  )
  const cards = data.cards.filter((cardData) => cardData.imageUrl)

  return {
    props: {
      cards,
    },
  }
}
