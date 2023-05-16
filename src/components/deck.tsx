import styles from './deck.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { removeCard, reset } from '@/lib/redux/slices/deckSlice'
import axios, { AxiosError } from 'axios'
import { useRef } from 'react'
import { assertIsDefined } from '@/utils/methods/global'
import { toast } from 'react-toastify'
import { toastConfig } from '@/lib/toastify.config'

export default function Deck() {
  const cards = useSelector((state: RootState) => state.deck.cards)
  const dispatch = useDispatch()
  const decknameRef = useRef<HTMLInputElement | null>(null)

  const hSave = async () => {
    assertIsDefined(decknameRef.current)

    const myData = {
      description: 'totoland',
      name: decknameRef.current.value || 'Default deck',
      idAuthor: 1,
      cards: cards,
    }

    axios
      .post('http://localhost:3000/api/decks', myData)
      .then((res) => {
        if (res.status === 201) {
          toast.success('Deck ajouté avec succès !', toastConfig)
        }
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 409) {
            toast.error(error.response.data, toastConfig)
          }
        }
      })
  }

  return (
    <>
      <ul className={styles.deck}>
        {cards.map((card) => (
          <li className={styles.li} key={card.id}>
            <button
              className={styles.btn}
              onClick={() => dispatch(removeCard(card.uuid))}
            >
              -
            </button>
            <span className={styles.cardName}>
              {card.count}x {card.name}
            </span>
          </li>
        ))}
      </ul>

      <div className={styles.btnsWrapper}>
        <form onSubmit={hSave}>
          <input
            type="text"
            ref={decknameRef}
            placeholder="Deck name"
            className={styles.input}
          />
        </form>
      </div>
      {cards.length > 0 && (
        <div className={styles.btnsWrapper}>
          <button
            className={[styles.btn, styles.btnAction].join(' ')}
            onClick={hSave}
          >
            Save the deck
          </button>
          <button
            className={[styles.btn, styles.btnAction].join(' ')}
            onClick={() => dispatch(reset())}
          >
            Reset the deck
          </button>
        </div>
      )}
    </>
  )
}
