import styles from './deck.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { removeCard } from '@/lib/redux/slices/deckSlice'
import axios from 'axios'

export default function Deck() {
  const cards = useSelector((state: RootState) => state.deck.cards)
  const dispatch = useDispatch()

  const hSave = async () => {
    const myData = {
      description: 'totoland',
      name: 'test-' + Math.random() * 100,
      idAuthor: 1,
      cards: cards,
    }

    await axios.post('http://localhost:3000/api/decks', myData)
  }

  return (
    <>
      <ul className={styles.deck}>
        {cards.map((card) => (
          <li key={card.id}>
            <button
              onClick={() =>
                dispatch(
                  removeCard({
                    id: card.id,
                    uuid: card.id,
                    count: 1,
                    name: '',
                  })
                )
              }
            >
              -
            </button>
            {card.count}x {card.name}
          </li>
        ))}
      </ul>
      <button onClick={hSave}>Save</button>
    </>
  )
}
