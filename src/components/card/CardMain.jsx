import { useState, useEffect, useContext, createContext } from "react"

const moveContext = createContext({
  isFirstMove: false,
  setIsFirstMove: () => {},
})

export default function CardMain() {
  const cardImages = [{ src: "../../image/card/card01.png" }, { src: "../../image/card/card02.png" }, { src: "../../image/card/card03.png" }]
  const [cards, setCards] = useState([])

  const shuffleCards = () => {
    const shuffledDeck = [...cardImages, ...cardImages].sort(() => Math.random(0, 1) - 0.5).map((card) => ({ ...card, id: Math.random(0, 1) }))
    setCards(shuffledDeck)
  }
  // initialize
  useEffect(() => {
    shuffleCards()
  }, [])

  const [isFirstMove, setIsFirstMove] = useState(true)
  const value = { isFirstMove, setIsFirstMove }

  const [flipCardId, setFlipCardId] = useState({
    first: { id: null, src: null },
    second: { id: null, src: null },
  })

  const [isFlipped, setIsFlipped] = useState([])

  useEffect(() => {
    if (flipCardId.first === null || flipCardId.second === null) return

    console.log(isFirstMove)
    console.log(flipCardId)
    if (flipCardId.first === flipCardId.second) {
      console.log("it is a pair")
    } else {
      console.log("not match")
    }
  }, [isFirstMove])

  const flipCard = (e) => {
    const currCardId = e.target.dataset.id
    const currCardSrc = e.target.dataset.src
    console.log(currCardId)
    console.log(isFirstMove)
    isFirstMove ? setFlipCardId({ ...flipCardId, first: { id: currCardId, src: currCardSrc } }) : setFlipCardId({ ...flipCardId, second: { id: currCardId, src: currCardSrc } })

    setIsFirstMove(!isFirstMove)
  }

  return (
    <moveContext.Provider value={value}>
      <button onClick={shuffleCards}>reset</button>
      <div className="grid grid-cols-6 gap-2">
        {cards.map((card, index) => (
          <SingleCard card={card} turned={flipCardId.first.id == card.id || flipCardId.second.id == card.id} flipCard={flipCard} key={`${card.id}-${index}`} />
        ))}
      </div>
    </moveContext.Provider>
  )
}

function SingleCard({ card: { src, id }, turned, flipCard }) {
  // const { isFirstMove, setIsFirstMove } = useContext(moveContext)

  const handleFlipCard = (e) => {
    flipCard(e)
  }
  return (
    <div className="relative" data-turned={turned}>
      <img src="../../image/card/back.png" alt="back" className="absolute top-0 left-0" data-src={src} data-id={id} onClick={handleFlipCard} />
      <img src={src} alt="front" className="absolute top-0 left-0" data-src={src} data-id={id} onClick={handleFlipCard} />
    </div>
  )
}
