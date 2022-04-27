import Arrow from "../image/arrow.svg"
import Hamburger from "../image/hamburger.svg"

export default function NolookSidebarRight() {
  return (
    <div className="fixed top-0 right-0 z-10 h-screen">
      <a href="/" className="block w-[37px] h-[16px] absolute top-20 right-10">
        <img src={Hamburger} alt="" />
      </a>
      <a href="/" className="block w-[37px] h-[16px] absolute bottom-10 right-10">
        <img src={Arrow} alt="" />
      </a>
    </div>
  )
}
