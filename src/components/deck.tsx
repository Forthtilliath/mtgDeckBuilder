import styles from './deck.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import { removeCard, reset } from '@/lib/redux/slices/deckSlice'
import axios, { AxiosError } from 'axios'
import { assertIsDefined } from '@/utils/methods/global'
import { toast } from 'react-toastify'
import { toastConfig } from '@/lib/toastify.config'
import { useRefInputs } from '@/utils/hooks/useRefInputs'
import { DeckForm, inputsName } from './forms/deckForm'

export default function Deck() {
  const cards = useSelector((state: RootState) => state.deck.cards)
  const dispatch = useDispatch()

  // const [formRef, setRef] = useRefInputs(['name', 'desc'])
  const [formRef, setRef] = useRefInputs(inputsName)

  const hSave = async () => {
    assertIsDefined(formRef.current.desc)
    assertIsDefined(formRef.current.name)

    const myData = {
      description: formRef.current.desc.value,
      name: formRef.current.name.value || 'Default deck',
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
      <DeckForm setRef={setRef} onSubmit={hSave} />

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
