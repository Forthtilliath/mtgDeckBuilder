import { ReactNode } from 'react'
import styles from './main.module.scss'

interface Props {
  children: ReactNode
}
export default function Main({ children }: Props) {
  return <main className={styles.main}>{children}</main>
}
