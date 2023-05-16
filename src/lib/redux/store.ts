import { configureStore } from '@reduxjs/toolkit'
import deckReducer from './slices/deckSlice'
import { useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    deck: deckReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export function useDeck() {
  return useSelector((state: RootState) => state.deck.cards)
}
