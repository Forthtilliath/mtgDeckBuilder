import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import variables from '../styles/variables.module.scss'

const inter = Inter({ subsets: ['latin'] })
const siteTitle = 'MtgDeckBuilder'

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>This should be {variables.primaryColor}</p>
      <main className={`${styles.main} ${inter.className}`}></main>
    </>
  )
}
