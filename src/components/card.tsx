import Image from 'next/image'
import styles from './card.module.scss'
import { useDispatch } from 'react-redux'
import { addCard } from '@/lib/redux/slices/deckSlice'
import { useDeck } from '@/lib/redux/store'

type Props = API.Card

export default function Card({ name, id, imageUrl }: Props) {
  const cards = useDeck()
  const dispatch = useDispatch()

  const card = cards.find((c) => c.id === id)

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
      disabled={card && card.count >= 4}
    >
      {/* Width et height a override dans le module scss */}
      <Image
        src={imageUrl}
        alt={name}
        width={63 * 3}
        height={88 * 3}
        unoptimized
      />
    </button>
  )
}
