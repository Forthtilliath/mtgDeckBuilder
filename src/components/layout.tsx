import Head from 'next/head'
import styles from './layout.module.scss'
import { ReactNode } from 'react'

export const siteTitle = 'MtgDeckBuilder'

interface Props {
  children: ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Build your Magic: the Gathering deck right here!"
        />
      </Head>
      <header className={styles.header}>
        <h1>ValhallaCode</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}
