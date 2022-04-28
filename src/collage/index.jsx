import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import "../css/index.css"
import "../css/App.css"
import { collageImages } from "../data/collageData"
import gsap from "gsap"
import { Draggable } from "gsap/all"

function CollageMain() {
  useEffect(() => {
    gsap.registerPlugin(Draggable)

    Draggable.create(".draggable", {
      onPress: function () {
        console.log("clicked")
      },
    })
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <h1 className="text-[60vw] leading-none font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">あ</h1>
      <div className="relative z-100 w-full h-full">
        {collageImages.map((image, index) => (
          <img src={image} alt={`collage-image-${index + 1}`} key={`collage-image-${index + 1}`} className={`draggable collage-image collage-image-${index + 1}`} />
        ))}
      </div>
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
