import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import ErrorBoundary from "./errorBoundary";
import ListPage from "../pages/List";
import ChatRoomPage from "../pages/ChatRoom";
import MainPage from "../pages/Main";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
  {
    path: "/chat-room",
    element: <ChatRoomPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
]);

export default router;
