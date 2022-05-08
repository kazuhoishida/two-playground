import { useCallback, useEffect, useRef, useState } from "react"
import useWindowSize from "../../hooks/useWindowSize"
import useMousePos from "../../hooks/useMousePos"

export default function NeueMain() {
  const textClass = "absolute top-[15vh] left-0 px-20 text-[7vw] leading-tight"
  const size = useWindowSize()
  const mousePos = useMousePos()
  const canvasRef = useRef(null)
  const containerRef = useRef()

  const draw = useCallback(
    (context, mousePos) => {
      context.globalCompositeOperation = "destination-out"
      context.fillStyle = "#00ff00"
      context.beginPath()
      context.arc(mousePos.x, mousePos.y, size.width / 20, 0, 2 * Math.PI)
      context.fill()
    },
    [mousePos, canvasRef]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    context.fillStyle = "#ffffff"
    context.fillRect(0, 0, size.width, size.height)

    // drawing on mouse move
    canvas.addEventListener("mousemove", (mousePos) => draw(context, mousePos))

    return () => canvas.removeEventListener("mousemove", (mousePos) => draw(context, mousePos))
  }, [])

  return (
    <div className="mx-auto">
      <div className="relative w-full" ref={containerRef}>
        <p className={`${textClass} z-0 pointer-events-auto`}>
          We believe in <span>brave choices. Strip away everything that is not relevant and build</span>&nbsp;a lasting story
        </p>
        <div className="absolute top-0 left-0">
          <canvas className="absolute top-0 left-0 z-[9] " ref={canvasRef} height={size.height} width={size.width} />
        </div>
        <p className={`${textClass} z-10 text-red-500 pointer-events-none`}>
          We believe in <span className="opacity-0">brave choices. Strip away everything that is not relevant and build</span>&nbsp;a lasting story
        </p>
      </div>
    </div>
  )
}
