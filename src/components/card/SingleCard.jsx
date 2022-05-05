import { useContext } from "react"
import { moveContext, flipContext } from "./CardContext"

export default function SingleCard({ card, turned, clickable }) {
  const { isFirstMove, setIsFirstMove } = useContext(moveContext)
  const { flipCardId, setFlipCardId } = useContext(flipContext)

  const handleFlipCard = () => {
    if (turned || !clickable) return

    isFirstMove ? setFlipCardId({ ...flipCardId, first: card }) : setFlipCardId({ ...flipCardId, second: card })
    setIsFirstMove(!isFirstMove)
  }
  return (
    <div className={turned ? "card-style flipped-style" : "card-style normal-style"}>
      <div style={{ backgroundImage: `url(${card.src})` }} className="frontface w-full h-full absolute top-0 left-0 z-0" onClick={handleFlipCard} />
      <div style={{ backgroundImage: "url(../../image/card/back.png)" }} className="backface w-full h-full absolute top-0 left-0 z-10" onClick={handleFlipCard} />
    </div>
  )
}
