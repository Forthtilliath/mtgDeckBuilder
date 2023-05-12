import styles from './gallery.module.scss'
import Card from './card'

interface Props {
  cards: API.Card[]
}

// Forth: J'ai trouvé plus propre de mettre la boucle ici plutot que d'utiliser children
// J'ai donc retiré children et il fallait ajouter la prop cards
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
