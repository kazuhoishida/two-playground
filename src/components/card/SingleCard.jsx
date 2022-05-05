export default function SingleCard({ card, turned, clickable, flipCard }) {
  const handleFlipCard = () => {
    if (turned || !clickable) return
    flipCard(card)
  }
  return (
    <div className={turned ? "card-style flipped-style" : "card-style normal-style"}>
      <div style={{ backgroundImage: `url(${card.src})` }} className="frontface card-image" />
      <div style={{ backgroundImage: "url(../../image/card/back.png)" }} className="backface card-image" onClick={handleFlipCard} />
    </div>
  )
}
