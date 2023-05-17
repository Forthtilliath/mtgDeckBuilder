import { UseRefFieldsActions } from '@/utils/hooks/useRefFields'
import styles from './deckForm.module.scss'

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  setRef: UseRefFieldsActions<(typeof inputsName)[number]>['setRef']
}

export const inputsName = ['name', 'desc'] as const

export function DeckForm(props: Props) {
  return (
    <form onSubmit={props.onSubmit} className={styles.form}>
      <input
        type="text"
        ref={props.setRef('name')}
        placeholder="Deck name"
        className={styles.input}
      />
      <input
        type="text"
        ref={props.setRef('desc')}
        placeholder="Deck description"
        className={styles.input}
      />
    </form>
  )
}
