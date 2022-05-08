import React from "react"
import ReactDOM from "react-dom/client"
import "../css/index.css"
import NolookMain from "../components/nolook/NolookMain"
import NolookSidebarLeft from "../components/nolook/NolookSidebarLeft"
import NolookSidebarRight from "../components/nolook/NolookSidebarRight"

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
