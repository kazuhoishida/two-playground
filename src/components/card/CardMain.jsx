import { useState, useEffect } from "react"
import SingleCard from "./SingleCard"
import { cardImagesEN, cardImagesJA } from "./cardImages"
import { useAtom } from "jotai"
import { isFirstMoveAtom, flipCardIdAtom } from "./CardContext"
import CardInfo from "./CardInfo"
import deckIcon from "../../image/card/deck.svg"

export default function CardMain() {
  const [isEnglish, setIsEnglish] = useState(true)
  const [cards, setCards] = useState([])
  const [rounds, setRounds] = useState(0)
  const [clickable, setClickable] = useState(true)
  const [isFirstMove, setIsFirstMove] = useAtom(isFirstMoveAtom)
  const [flipCardId, setFlipCardId] = useAtom(flipCardIdAtom)
  const [message, setMessage] = useState()
  const FLIP_BACK_DELAY = 1000
  const [isOpen, setIsOpen] = useState(false)

  // randomize the card rotation
  const randomDeg = () => {
    const deg = (Math.random() - 0.5) * 12
    return deg
  }

  const shuffleCards = () => {
    const cardImages = isEnglish ? cardImagesEN : cardImagesJA
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

    setTimeout(() => {
      if (rounds < cards.length / 2) {
        setMessage("Congratulations! You can try another card deck 👈")
      } else {
        setMessage("Hmm...You can try another card deck 👈")
      }
      setIsOpen(true)
    }, 1000)
  }, [cards])

  const handleLang = () => {
    setIsEnglish(!isEnglish)
  }

  //initialize card deck
  useEffect(() => {
    shuffleCards()
  }, [isEnglish])

  return (
    <div className="pt-8 text-white">
      <h1 className="text-center text-16 mb-6">TYPEFINDER</h1>
      <div className="fixed left-6 top-1/2 -translate-y-1/2 cursor-pointer flex items-center" onClick={handleLang}>
        <img src={deckIcon} alt="deck" />
        <span className="text-12 ml-2">{isEnglish ? "欧文" : "和文"}</span>
      </div>
      <div className="grid grid-cols-6 gap-x-8 gap-y-3 w-3/5 mx-auto">
        {cards.map((card) => (
          <SingleCard card={card} isEnglish={isEnglish} turned={flipCardId.first == card || flipCardId.second == card || card.matched} clickable={clickable} deg={card.deg} key={card.id} />
        ))}
      </div>
      <CardInfo rounds={rounds} message={message} shuffleCards={shuffleCards} />
      {message && isOpen && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg border-4 border-black text-black">
          <div className="absolute top-2 right-2 underline" onClick={() => setIsOpen(false)}>
            close
          </div>
          <p className="px-[4vw] py-[6vh] text-black">{message}</p>
        </div>
      )}
    </div>
  )
}
