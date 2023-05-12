import Head from 'next/head'
import Layout from '../components/layout'
import Gallery from '@/components/gallery'
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
        <Gallery cards={cards} />
      </Layout>
    </Provider>
  )
}

export async function getServerSideProps() {
  const data = await getCards()
  const cards = data.cards ?? [];

  const formatedCards = cards
    .filter((cardData) => cardData.imageUrl)
    .map((c) => ({ id: c.id, name: c.name, imageUrl: c.imageUrl }))

  return {
    props: {
      cards: formatedCards,
    },
  }
}

async function getCards(): Promise<API.CardData> {
  try {
    const res = await fetch('https://api.magicthegathering.io/v1/cards')
    return res.json()
  } catch (e: any) {
    console.error(e.name)
    console.error(e.message)
    return { cards: [] }
  }
}
