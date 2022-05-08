import { useEffect, useRef, useState } from "react"
import wadf01 from "../../image/wadf/wadf01.png"
import wadf02 from "../../image/wadf/wadf02.png"
import wadf03 from "../../image/wadf/wadf03.png"
import wadf04 from "../../image/wadf/wadf04.png"
import wadf05 from "../../image/wadf/wadf05.png"
import wadf06 from "../../image/wadf/wadf06.png"
import wadf07 from "../../image/wadf/wadf07.png"
import wadf08 from "../../image/wadf/wadf08.png"
import wadf09 from "../../image/wadf/wadf09.png"

export default function WadfMain() {
  // randomize the thumb rotation
  const randomDeg = () => {
    return (Math.random() - 0.5) * 14
  }

  const thumbs = [
    { src: wadf01, title: "CCC" },
    { src: wadf02, title: "Chanel" },
    { src: wadf03, title: "H.Mutuelle" },
    { src: wadf04, title: "L. Dance" },
    { src: wadf05, title: "L'Équipe" },
    { src: wadf06, title: "OCS" },
    { src: wadf07, title: "Picard" },
    { src: wadf08, title: "RCF" },
    { src: wadf09, title: "Ride" },
  ]
  const thumbArr = [...thumbs].map((thumb, index) => ({ ...thumb, deg: randomDeg(), id: Math.random(), index: index }))
  const [worksList, setWorksList] = useState(thumbArr)
  const thumbRef = useRef()
  const [isActive, setIsActive] = useState(-1)

  const handleHover = (e) => {
    const currIndex = parseInt(e.target.dataset.index)
    setIsActive(currIndex)
  }

  useEffect(() => {
    setWorksList((works) => works.map((work) => (work.index === isActive ? { ...work, deg: randomDeg() } : work)))
  }, [isActive])

  return (
    <>
      <ul className="pt-[20vh] pb-20 px-[5vw] z-10 relative">
        {worksList.map(({ id, title }, index) => (
          <li key={id} className="text-[12vw] leading-tight text-[#bababa] hover:text-black duration-300 cursor-pointer" data-index={index} onMouseOver={handleHover}>
            {title}
          </li>
        ))}
      </ul>
      <ul className="w-full h-screen fixed top-0 left-0 z-0" ref={thumbRef}>
        {worksList.map(({ src, id, deg }, index) => (
          <li key={id} className={`absolute w-full h-full p-[6%] transition-all duration-500 ${isActive === index ? "z-10 scale-[1.16]" : "z-0"}`} data-index={index}>
            <img src={src} alt="thumb image" className="w-full h-full object-contain duration-300 delay-100" style={{ transform: `rotate(${deg}deg)` }} />
          </li>
        ))}
      </ul>
    </>
  )
}
