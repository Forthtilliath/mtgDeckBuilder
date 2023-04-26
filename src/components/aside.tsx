import { ReactNode } from 'react'
import styles from './aside.module.scss'

interface Props {
  children: ReactNode
}
export default function Aside({ children }: Props) {
  return <aside className={styles.aside}>{children}</aside>
}
