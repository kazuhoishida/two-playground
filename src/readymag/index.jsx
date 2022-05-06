import React from "react"
import ReactDOM from "react-dom/client"
import "../css/index.css"
import "../css/App.css"
import CollageMain from "../components/collage/CollageMain"

function CollageApp() {
  return <CollageMain />
}

ReactDOM.createRoot(document.getElementById("collage-root")).render(
  <React.StrictMode>
    <CollageApp />
  </React.StrictMode>
)
