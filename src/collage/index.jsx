import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import "../css/index.css"
import "../css/App.css"
import { collageImages } from "../data/collageData"
import gsap from "gsap"
import { Draggable } from "gsap/all"
import RingTone from "../sound/ring.mp3"

function CollageMain() {
  useEffect(() => {
    gsap.registerPlugin(Draggable)

    Draggable.create(".draggable", {
      type: "x,y",
      bounds: ".container",
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
        duration: 0.6,
      })
    })
  }

  const playSound = () => {
    const audio = new Audio(RingTone)
    audio.loop = false

    audio.play()
  }

  return (
    <div className="relative h-screen overflow-hidden container">
      <h1 className="text-[60vw] leading-none font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-[96%] transition-all" onClick={(resetPos, playSound)}>
        あ
      </h1>
      {collageImages.map((image, index) => (
        <img src={image} alt={`collage-image-${index + 1}`} key={`collage-image-${index + 1}`} className={`draggable collage-image collage-image-${index + 1}`} />
      ))}
      <button className="absolute top-10 right-4" onClick={resetPos}>
        click to reset
      </button>
    </div>
  )
}

function CollageApp() {
  return <CollageMain />
}

ReactDOM.createRoot(document.getElementById("collage-root")).render(
  <React.StrictMode>
    <CollageApp />
  </React.StrictMode>
)
