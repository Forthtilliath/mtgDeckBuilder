import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'

export function useDeck() {
  return useSelector((state: RootState) => state.deck.cards)
}