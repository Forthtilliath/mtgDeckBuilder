import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CardStore {
  id: string
  uuid: string
  name: string
  count: number
}

export interface DeckState {
  cards: CardStore[]
}

const initialState: DeckState = {
  cards: [],
}

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardStore>) => {
      const targetCard = state.cards.find(
        (curCard) => curCard.uuid === action.payload.uuid
      )
      if (targetCard) {
        if (targetCard.count < 4) targetCard.count += 1
      } else {
        state.cards.push(action.payload)
      }
    },
    removeCard: (state, action: PayloadAction<DB.Card['uuid']>) => {
      const indexToDelete = state.cards.findIndex(
        (curCard) => curCard.uuid === action.payload
      )
      if (state.cards[indexToDelete].count > 1) {
        state.cards[indexToDelete].count -= 1
      } else {
        state.cards.splice(indexToDelete, 1)
      }
    },
    reset: () => ({ ...initialState }),
  },
})

export const { addCard, removeCard, reset } = deckSlice.actions
export default deckSlice.reducer
