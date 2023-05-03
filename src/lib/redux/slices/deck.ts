import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CardData {
  id: string
  uuid: string
  name: string
  count: number
}

export interface DeckState {
  cards: CardData[]
}

const initialState: DeckState = {
  cards: [],
}

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardData>) => {
      const targetCard = state.cards.find(
        (curCard) => curCard.uuid === action.payload.uuid
      )
      if (targetCard) {
        if (targetCard.count < 4) targetCard.count += 1
      } else {
        state.cards.push(action.payload)
      }
    },
    removeCard: (state, action: PayloadAction<CardData>) => {
      const indexToDelete = state.cards.findIndex(
        (curCard) => curCard.uuid === action.payload.uuid
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
