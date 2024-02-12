import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import React from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/index.tsx";

import "react-datepicker/dist/react-datepicker.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <RecoilRoot>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RecoilRoot>
);
