import * as React from "react";

import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import ErrorBoundary from "./errorBoundary";
import ListPage from "../pages/List";
import ChatRoomPage from "../pages/ChatRoom";
import MainPage from "../pages/Main";
import NotFound from "./NotFound";
import StudyCreate from "../pages/StudyCreate";
import StudyEdit from "../pages/StudyEdit";

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
  { path: "/study/create", element: <StudyCreate /> },
  { path: "/study/edit", element: <StudyEdit /> },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
