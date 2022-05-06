import { useEffect } from "react"
import { collageImages } from "./collageData"
import gsap from "gsap"
import { Draggable } from "gsap/all"
import RingTone from "../../sound/ring.mp3"
import CollageHeader from "./CollageHeader"
import bookImg from "../../image/collage/book.webp"

export default function CollageMain() {
  useEffect(() => {
    gsap.registerPlugin(Draggable)

    Draggable.create(".draggable", {
      type: "x,y",
      throwProps: true,
      onPress: (e) => {
        e.target.style.filter = "brightness(1.1)"
      },
      onRelease: (e) => {
        e.target.style.filter = "brightness(1)"
      },
    })
  }, [])

  const resetPos = () => {
    const targets = document.querySelectorAll(".draggable")
    targets.forEach((target) => {
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.5,
      })
    })
  }

  const playSound = () => {
    const audio = new Audio(RingTone)
    audio.loop = false

    audio.play()
  }

  return (
    <div className="relative w-full h-screen">
      <CollageHeader />
      <div className="relative w-full min-h-[80vh] mt-10">
        <h1 className="w-full flex justify-center z-0 pointer-events-none">
          <img src={bookImg} alt="book" className="w-[54%] h-auto" />
        </h1>
        {collageImages.map((image, index) => (
          <img src={image} alt={`collage-image-${index + 1}`} key={`collage-image-${index + 1}`} className={`draggable collage-image collage-image-${index + 1}`} />
        ))}
      </div>
      <button
        className="fixed bottom-10 right-10 z-[9999] italic"
        onClick={() => {
          resetPos()
          playSound()
        }}
      >
        Reset Position
      </button>
    </div>
  )
}
