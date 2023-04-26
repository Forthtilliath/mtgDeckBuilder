import Image from 'next/image'
import styles from './card.module.scss'

interface Props {
  name: string
  id: string
  imgUrl: string
}
export default function Card({ name, id, imgUrl }: Props) {
  const hClickCard = function () {
    console.log(name, id, imgUrl)
  }

  return (
    <button className={styles.card} onClick={hClickCard}>
      {/* Width et height a override dans le module scss */}
      <Image
        src={imgUrl}
        alt={name}
        width={63 * 3}
        height={88 * 3}
        unoptimized
      />
    </button>
  )
}
