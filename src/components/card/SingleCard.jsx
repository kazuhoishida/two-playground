import { useAtom } from "jotai"
import { isFirstMoveAtom, flipCardIdAtom } from "./CardContext"

export default function SingleCard({ card, turned, clickable, deg }) {
  const [isFirstMove, setIsFirstMove] = useAtom(isFirstMoveAtom)
  const [flipCardId, setFlipCardId] = useAtom(flipCardIdAtom)

  const handleFlipCard = () => {
    if (turned || !clickable) return

    isFirstMove ? setFlipCardId({ ...flipCardId, first: card }) : setFlipCardId({ ...flipCardId, second: card })
    setIsFirstMove(!isFirstMove)
  }

  return (
    <div className="transition-all" style={{ transform: `rotate(${deg}deg)` }}>
      <div className={turned ? "card-style flipped-style" : "card-style normal-style"}>
        <img src={card.src} alt="card front" className="frontface card-image" />
        <img src="../../image/card/back.png" alt="card back" className="backface card-image" onClick={handleFlipCard} />
      </div>
    </div>
  )
}
