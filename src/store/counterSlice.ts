import { create } from 'zustand'

type State = {
  count: number
  increment: () => void
  decrement: () => void
}

const createCounterSlide = create<State>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export const useCount = () => createCounterSlide((state) => state.count)
export const useIncrement = () => createCounterSlide((state) => state.increment)
export const useDecrement = () => createCounterSlide((state) => state.decrement)
