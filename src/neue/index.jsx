import React from "react"
import ReactDOM from "react-dom/client"
import "../css/index.css"
import NeueHeader from "../components/neue/NeueHeader"
import NeueMain from "../components/neue/NeueMain"
import ContentImg from "../image/neue/img01.jpg"

function NeueApp() {
  return (
    <section className="wrapper">
      <NeueHeader />
      <NeueMain />
      <img src={ContentImg} alt="image" className="w-full h-screen" />
    </section>
  )
}

ReactDOM.createRoot(document.getElementById("neue-root")).render(
  <React.StrictMode>
    <NeueApp />
  </React.StrictMode>
)
