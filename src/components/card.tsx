import Image from 'next/image'
import styles from './card.module.scss'
import { useDispatch } from 'react-redux'
import { addCard } from '@/lib/redux/slices/deck'

interface Props {
  name: string
  id: string
  imgUrl: string
}
export default function Card({ name, id, imgUrl }: Props) {
  const dispatch = useDispatch()

  return (
    <button
      className={styles.card}
      onClick={() =>
        dispatch(
          addCard({
            count: 1,
            id: id,
            name: name,
            uuid: id,
          })
        )
      }
    >
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
