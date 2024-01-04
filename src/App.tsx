import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login"
import ErrorBoundary from "./routes/errorBoundary"
import MainPage from "./pages/Main"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route
        path="/login"
        element={<LoginPage />}
        errorElement={<ErrorBoundary />}
      ></Route>
    </Routes>
  )
}

export default App
