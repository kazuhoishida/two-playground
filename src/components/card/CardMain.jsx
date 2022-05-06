import { useState, useEffect } from "react"
import SingleCard from "./SingleCard"
import { cardImages } from "./cardImages"
import { useAtom } from "jotai"
import { isFirstMoveAtom, flipCardIdAtom } from "./CardContext"
import CardInfo from "./CardInfo"

export default function CardMain() {
  const [cards, setCards] = useState([])
  const [rounds, setRounds] = useState(0)
  const [clickable, setClickable] = useState(true)
  const [isFirstMove, setIsFirstMove] = useAtom(isFirstMoveAtom)
  const [flipCardId, setFlipCardId] = useAtom(flipCardIdAtom)
  const [message, setMessage] = useState()
  const FLIP_BACK_DELAY = 1000

  // randomize the card rotation
  const randomDeg = () => {
    const deg = (Math.random() - 0.5) * 12
    return deg
  }

  const shuffleCards = () => {
    const shuffledDeck = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random(), matched: false, deg: randomDeg() }))
    setCards(shuffledDeck)
    setRounds(0)
    setMessage("")
  }

  useEffect(() => {
    if (flipCardId.first === null || flipCardId.second === null) return

    //disable click another card temporarily
    setClickable(false)

    if (flipCardId.first.src === flipCardId.second.src) {
      // case match
      setCards((prevDeck) =>
        prevDeck.map((card) => {
          return card.src === flipCardId.first.src ? { ...card, matched: true } : card
        })
      )

      setFlipCardId({ first: null, second: null })
      setClickable(true)
    } else {
      // case not match
      setRounds(rounds + 1)

      setTimeout(() => {
        setCards((prevDeck) =>
          prevDeck.map((card) => {
            if (card.id === flipCardId.first.id || card.id === flipCardId.second.id) {
              return { ...card, deg: randomDeg() }
            } else {
              return card
            }
          })
        )
        setFlipCardId({ first: null, second: null })
        setClickable(true)
      }, FLIP_BACK_DELAY)
    }
  }, [isFirstMove])

  //check if game is finished
  useEffect(() => {
    if (cards.length === 0) return

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].matched === false) return
    }

    if (rounds < cards.length) {
      setMessage("Congratulations! Do you want to play again? 👉")
    } else {
      setMessage("Hmm...Do you want to play again? 👉")
    }
  }, [cards])

  //initialize card deck
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="pt-8 text-white">
      <h1 className="text-center text-16 mb-6">TYPEFINDER</h1>
      <div className="grid grid-cols-6 gap-x-8 gap-y-3 w-3/5 mx-auto">
        {cards.map((card) => (
          <SingleCard card={card} turned={flipCardId.first == card || flipCardId.second == card || card.matched} clickable={clickable} deg={card.deg} key={card.id} />
        ))}
      </div>
      <CardInfo rounds={rounds} message={message} shuffleCards={shuffleCards} />
    </div>
  )
}
