import styles from './gallery.module.scss'
import Card from './card'

interface Props {
  cards: API.Card[]
}

export default function Gallery({ cards }: Props) {
  return (
    <ul className={styles.gallery}>
      {cards.map((cardData) => (
        <Card
          key={cardData.id}
          id={cardData.id}
          name={cardData.name}
          imageUrl={cardData.imageUrl}
        />
      ))}
    </ul>
  )
}
