import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login"
import ErrorBoundary from "./routes/errorBoundary"
import MainPage from "./pages/Main"
import ListPage from "./pages/List"
import ChatRoomPage from "./pages/ChatRoom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route
        path="/login"
        element={<LoginPage />}
        errorElement={<ErrorBoundary />}
      ></Route>
      <Route path="/list" element={<ListPage />}></Route>
      <Route path="/chat-room" element={<ChatRoomPage />}></Route>
    </Routes>
  )
}

export default App
