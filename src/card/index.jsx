import React from "react"
import ReactDOM from "react-dom/client"
import "../css/index.css"
import CardMain from "../components/card/CardMain"

function CardApp() {
  return (
    <section>
      <CardMain />
    </section>
  )
}

ReactDOM.createRoot(document.getElementById("card-root")).render(
  <React.StrictMode>
    <CardApp />
  </React.StrictMode>
)
