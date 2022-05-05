import { useState, useEffect } from "react"
import SingleCard from "./SingleCard"
import { cardImages } from "./cardImages"

export default function CardMain() {
  const [cards, setCards] = useState([])
  const [rounds, setRounds] = useState(0)
  const [clickable, setClickable] = useState(true)
  const [isFirstMove, setIsFirstMove] = useState(true)
  const [flipCardId, setFlipCardId] = useState({
    first: null,
    second: null,
  })
  const [message, setMessage] = useState()

  const shuffleCards = () => {
    const shuffledDeck = [...cardImages, ...cardImages].sort(() => Math.random(0, 1) - 0.5).map((card) => ({ ...card, id: Math.random(0, 1), matched: false }))
    setCards(shuffledDeck)
    setRounds(0)
  }

  useEffect(() => {
    if (flipCardId.first === null || flipCardId.second === null) return
    setClickable(false)

    if (flipCardId.first.src === flipCardId.second.src) {
      setCards((prevDeck) => {
        return prevDeck.map((card) => {
          if (card.src === flipCardId.first.src) {
            return { ...card, matched: true }
          } else {
            return card
          }
        })
      })

      setFlipCardId({ first: null, second: null })
      setClickable(true)
    } else {
      setRounds(rounds + 1)
      setTimeout(() => {
        setFlipCardId({ first: null, second: null })
        setClickable(true)
      }, 1000)
    }
  }, [isFirstMove])

  const flipCard = (card) => {
    isFirstMove ? setFlipCardId({ ...flipCardId, first: card }) : setFlipCardId({ ...flipCardId, second: card })
    setIsFirstMove(!isFirstMove)
  }

  //check if game is finished
  useEffect(() => {
    if (cards.length === 0) return
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].matched === false) return
    }

    if (rounds < cards.length) {
      setMessage("Congratulations!")
    } else {
      setMessage("not bad, actually")
    }
  }, [cards])

  //initialize card deck
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <>
      <div className="pt-10 text-white">
        <h1 className="text-center text-16 mb-10">TYPEFINDER</h1>
        <div className="grid grid-cols-6 gap-4 w-3/5 mx-auto">
          {cards.map((card, index) => (
            <SingleCard card={card} turned={flipCardId.first == card || flipCardId.second == card || card.matched} clickable={clickable} flipCard={flipCard} key={`${card.id}-${index}`} />
          ))}
        </div>
        <p className="text-center mt-10">{message}</p>
        <div className="flex justify-between absolute bottom-10 left-[10%] w-4/5">
          <p className="">
            <span className="mr-2">{rounds}</span>rounds
          </p>
          <button onClick={shuffleCards}>Shuffle</button>
        </div>
      </div>
    </>
  )
}
