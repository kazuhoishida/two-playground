import { useRef, useEffect } from "react"
import MainImage from "../../image/kv@2x.webp"
import { gsap } from "gsap"
import useMousePos from "../../hooks/useMousePos"

export default function NolookMain() {
  const mousePos = useMousePos()
  const imageRef = useRef()
  const textRef = useRef()
  const bgRef = useRef()

  useEffect(() => {
    if (!imageRef.current || !bgRef.current || !textRef.current) return

    gsap.to(imageRef.current, {
      duration: 0.6,
      x: mousePos.x / 8,
      y: mousePos.y / 8,
    })
    gsap.to(bgRef.current, {
      duration: 0.8,
      delay: 0.05,
      x: mousePos.x / 8,
      y: mousePos.y / 8,
    })
    gsap.to(textRef.current, {
      duration: 0.3,
      x: mousePos.x / 22,
      y: mousePos.y / 22,
    })
  }, [mousePos])

  return (
    <div className="bg-white min-h-screen mt-[10vh] relative">
      <div className="w-[40vw] h-[70vh] ml-[40vw] relative">
        <div className="bg-[#f4c443] absolute top-0 left-0 z-0 w-full h-full block" ref={bgRef}></div>
        <div className="overflow-hidden w-full h-full">
          <div style={{ backgroundImage: `url(${MainImage})`, backgroundSize: "cover" }} className="absolute top-0 left-0 w-full h-full" ref={imageRef} />
        </div>
      </div>
      <div className="ml-[10vw] absolute top-[30%] left-[8%] z-0 mix-blend-difference text-white" ref={textRef}>
        <h1 className="text-[7vw] leading-[1.2] font-semibold">
          AVOID
          <br />
          THE PATHS
          <br />
          YOU'VE
          <br />
          ALREADY
          <br />
          TAKEN
        </h1>
      </div>
    </div>
  )
}
