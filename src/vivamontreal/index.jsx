import React from "react"
import ReactDOM from "react-dom/client"
import "../css/index.css"
import "../css/App.css"
import VivaDefyGravity from "../components/vivamontreal/VivaDefyGravity"

function VivamontrealApp() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full text-36 font-bold flex justify-between px-20 pt-6 z-50">
        <p>VIVA!</p>
        <p>Defying Gravity</p>
      </div>
      <VivaDefyGravity />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("vivamontreal-root")).render(
  <React.StrictMode>
    <VivamontrealApp />
  </React.StrictMode>
)
