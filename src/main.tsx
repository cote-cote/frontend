import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"

import "./index.css"
import App from "./App.tsx"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
)
