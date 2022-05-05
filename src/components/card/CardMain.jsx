import { useState, useEffect } from "react"
import SingleCard from "./SingleCard"
import { moveContext, flipContext } from "./CardContext"
import { cardImages } from "./cardImages"

export default function CardMain() {
  const [cards, setCards] = useState([])
  const [rounds, setRounds] = useState(0)
  const [clickable, setClickable] = useState(true)
  const [isFirstMove, setIsFirstMove] = useState(true)
  const value = { isFirstMove, setIsFirstMove }
  const [flipCardId, setFlipCardId] = useState({
    first: null,
    second: null,
  })
  const flipValue = { flipCardId, setFlipCardId }

  const shuffleCards = () => {
    const shuffledDeck = [...cardImages, ...cardImages].sort(() => Math.random(0, 1) - 0.5).map((card) => ({ ...card, id: Math.random(0, 1), matched: false }))
    setCards(shuffledDeck)
    setRounds(0)
  }

  //initialize card deck
  useEffect(() => {
    shuffleCards()
  }, [])

  useEffect(() => {
    if (flipCardId.first === null || flipCardId.second === null) return
    setClickable(false)

    if (flipCardId.first.src === flipCardId.second.src) {
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].src === flipCardId.first.src) cards[i].matched = true
      }

      for (let i = 0; i < cards.length; i++) {
        if ((cards[i].matched = true)) return
        console.log("finish")
      }

      setFlipCardId({ first: null, second: null })
      setClickable(true)
      setCards(cards)
    } else {
      setRounds(rounds + 1)

      setTimeout(() => {
        setFlipCardId({ first: null, second: null })
        setClickable(true)
      }, 1000)
    }
  }, [isFirstMove])

  return (
    <moveContext.Provider value={value}>
      <flipContext.Provider value={flipValue}>
        <div className="pt-10 text-white">
          <h1 className="text-center mb-10">TYPEFINDER</h1>
          <div className="grid grid-cols-6 gap-4 w-4/5 mx-auto">
            {cards.map((card, index) => (
              <SingleCard card={card} turned={flipCardId.first == card || flipCardId.second == card || card.matched} clickable={clickable} key={`${card.id}-${index}`} />
            ))}
          </div>
          <div className="flex justify-between absolute bottom-10 left-[10%] w-4/5">
            <p className="">
              <span className="mr-2">{rounds}</span>rounds
            </p>
            <button onClick={shuffleCards}>Shuffle</button>
          </div>
        </div>
      </flipContext.Provider>
    </moveContext.Provider>
  )
}
