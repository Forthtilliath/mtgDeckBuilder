import styles from './gallery.module.scss'
import Card from './card'

interface Props {
  cards: API.Card[]
}

export default function Gallery({ cards }: Props) {
  if (cards.length === 0) return <p>No Data</p>

  return (
    <ul className={styles.gallery}>
      {cards.map((cardData) => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </ul>
  )
}
