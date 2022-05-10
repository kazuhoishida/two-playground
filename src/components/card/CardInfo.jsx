import circleIcon from "../../image/card/circle.svg"
import shuffleIcon from "../../image/card/shuffle.svg"

export default function CardInfo({ rounds, shuffleCards }) {
  return (
    <div className="flex justify-between absolute bottom-6 left-[10%] w-4/5">
      <p className="flex">
        <span className="mr-4">
          <img src={circleIcon} alt="" />
        </span>
        <span className="mr-2">{rounds}</span>rounds
      </p>
      <button onClick={shuffleCards} className="flex">
        <span className="mr-4">
          <img src={shuffleIcon} alt="" />
        </span>
        Shuffle
      </button>
    </div>
  )
}
