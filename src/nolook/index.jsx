import React from "react"
import ReactDOM from "react-dom/client"
import "../css/index.css"
import NolookMain from "../components/NolookMain"
import NolookSidebarLeft from "../components/NolookSidebarLeft"
import NolookSidebarRight from "../components/NolookSidebarRight"

function NolookApp() {
  return (
    <div className="bg-white">
      <NolookSidebarLeft />
      <NolookMain />
      <NolookSidebarRight />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("nolook-root")).render(
  <React.StrictMode>
    <NolookApp />
  </React.StrictMode>
)
