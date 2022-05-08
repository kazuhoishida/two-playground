import { useState, useEffect } from "react"

export default function useMousePos() {
  const [mousePos, setMousePos] = useState({
    mouseX: 0,
    mouseY: 0,
  })

  useEffect(() => {
    const mouseMoveListener = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", mouseMoveListener)
    return () => window.removeEventListener("mousemove", mouseMoveListener)
  }, [])

  return mousePos
}
