import Head from 'next/head'
import Layout from '../components/layout'
import Gallery from '@/components/gallery'
import Card from '@/components/card'

const siteTitle = 'MtgDeckBuilder - Home'

interface CardData {
  id: string
  name: string
  imgUrl: string
}

export default function Home() {
  const cards: Array<CardData> = [
    {
      id: '42',
      imgUrl:
        'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=82992&type=card',
      name: 'Angel of Mercy',
    },
  ]

  return (
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
            imgUrl={cardData.imgUrl}
            key={cardData.id}
          />
        ))}
      </Gallery>
    </Layout>
  )
}
