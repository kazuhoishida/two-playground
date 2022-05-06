import { atom } from "jotai"

export const isFirstMoveAtom = atom(false)
export const flipCardIdAtom = atom({
  first: { id: null, src: null },
  second: { id: null, src: null },
})
