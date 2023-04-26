import { ReactNode } from 'react'
import styles from './gallery.module.scss'

interface Props {
  children: ReactNode
}
export default function Gallery({ children }: Props) {
  return <ul className={styles.gallery}>{children}</ul>
}
