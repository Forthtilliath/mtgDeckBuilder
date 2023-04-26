import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import { ReactNode } from 'react'

export const siteTitle = 'MtgDeckBuilder'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
        <>
          <Image
            priority
            src="/images/profile.jpg"
            height={144}
            width={144}
            alt=""
          />
          <h1>ValhallaCode</h1>
        </>
      </header>
      <main>{children}</main>
    </div>
  )
}
