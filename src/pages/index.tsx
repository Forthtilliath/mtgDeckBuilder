import Head from 'next/head'
import Layout from '../components/layout'
import Gallery from '@/components/gallery'
import { store } from '@/lib/redux/store'
import { Provider } from 'react-redux'
import { InferGetServerSidePropsType } from 'next'
import { ChangeEvent, cache, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { formatAPICardsWithImages } from '@/utils/methods/api'

const siteTitle = 'MtgDeckBuilder - Home'

export default function Home({
      cards,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [needle, setNeedle] = useState('')
  const [nextPage, setNextPage] = useState(2)
  const [cardsToDisplay, setCardsToDisplay] = useState(cards)

  const hChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNeedle(e.currentTarget.value)
  }

  const loadMore = async () => {
    const data = await getCards(nextPage)
    const cards = data.cards ?? []

    const formatedCards = cards
      .filter((cardData) => cardData.imageUrl)
      .map((c) => ({ id: c.id, name: c.name, imageUrl: c.imageUrl }))

    setCardsToDisplay((c) => [...c, ...formatedCards])
    setNextPage((p) => p + 1)
  }

  const filteredCards = cardsToDisplay.filter((c) => c.name.includes(needle))

  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <input
          type="search"
          value={needle}
          onChange={hChange}
          placeholder="Search..."
        />
        <Gallery cards={filteredCards} />
        <button type="button" onClick={loadMore}>
          Show more
        </button>
      </Layout>

      <ToastContainer />
    </Provider>
  )
}

export async function getServerSideProps() {
  const data = await getCards()
  const cards = data.cards ?? []

  return {
    props: {
      cards: formatAPICardsWithImages(cards),
    },
  }
}

// https://nextjs.org/docs/app/building-your-application/data-fetching/caching#preload-pattern-with-cache
// const getCards = cache(async (): Promise<API.CardData> => {
//   const res = await fetch('https://api.magicthegathering.io/v1/cards', {
//     next: {
//       revalidate: 10,
//     },
//   })

//   if (res.status !== 200) {
//     throw new Error(`Status ${res.status}`)
//   }

//   return res.json()
// });

async function getCards(page = 1): Promise<API.CardData> {
  try {
    const res = await fetch(
      `https://api.magicthegathering.io/v1/cards?page=${page}`
    )
    // Pour trouver la source du pourquoi ca fetch pas parfois
    console.log('Data fetched...')
    return res.json()
  } catch (e: any) {
    console.error(e.name)
    console.error(e.message)
    return { cards: [] }
  }
}
