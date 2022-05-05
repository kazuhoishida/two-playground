import { createContext } from "react"

export const moveContext = createContext({
  isFirstMove: false,
  setIsFirstMove: () => {},
})
export const flipContext = createContext({
  flipCardId: {
    first: { id: null, src: null },
    second: { id: null, src: null },
  },
  setFlipCardId: () => {},
})
