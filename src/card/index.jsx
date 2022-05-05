import React from "react"
import ReactDOM from "react-dom/client"
import "../css/index.css"
import CardMain from "../components/card/CardMain"

function CardApp() {
  return (
    <section className="bg-[#0f0f0f] w-full min-h-screen">
      <CardMain />
    </section>
  )
}

ReactDOM.createRoot(document.getElementById("card-root")).render(
  <React.StrictMode>
    <CardApp />
  </React.StrictMode>
)
