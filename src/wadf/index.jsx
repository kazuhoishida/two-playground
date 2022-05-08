import React from "react"
import ReactDOM from "react-dom/client"
import "../css/index.css"
import WadfMain from "../components/wadf/WadfMain"
import WadfHeader from "../components/wadf/WadfHeader"

function WadfApp() {
  return (
    <div className="bg-[#eaeaea]">
      <WadfHeader />
      <WadfMain />
      <a href="/" className="fixed bottom-10 right-10 text-20">
        CONTACT
      </a>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("wadf-root")).render(
  <React.StrictMode>
    <WadfApp />
  </React.StrictMode>
)
