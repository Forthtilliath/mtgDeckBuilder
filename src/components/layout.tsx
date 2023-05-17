import Deck from './deck'
import styles from './layout.module.scss'
import { ReactNode } from 'react'

export const siteTitle = 'MtgDeckBuilder'

interface Props {
  children: ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <header className={styles.titre}>
        <h1>ValhallaCode</h1>
      </header>
      <aside className={styles.aside}>
        <Deck />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
