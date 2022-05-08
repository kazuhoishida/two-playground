import React from "react"
import ReactDOM from "react-dom/client"
import "../css/index.css"
import "../css/App.css"
import VivaDefyGravity from "../components/vivamontreal/VivaDefyGravity"

function VivamontrealApp() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full text-36 font-bold flex justify-between px-10 pt-6 z-50">
        <p>VIVA!</p>
        <p>Defying Gravity</p>
      </div>
      <VivaDefyGravity />
      <div className="fixed bottom-4 left-0 flex justify-between items-end px-10 w-full">
        <p>
          Ateliers Jean Brillant,
          <br />
          661 Rose de Lima, Tiohtiá:ke/Montréal
          <br />
          (Métro Lionel-Groulx)
        </p>
        <ul className="flex justify-end">
          <li className="mr-4">Facebook</li>
          <li className="mr-4">Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("vivamontreal-root")).render(
  <React.StrictMode>
    <VivamontrealApp />
  </React.StrictMode>
)
