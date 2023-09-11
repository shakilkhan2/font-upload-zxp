import React from "react";
import ReactDOM from "react-dom/client";
// import App.jsx from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./home/Home";
import UploadFont from "./uploadFont/UploadFont";
import Fonts from "./fonts/Fonts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/font-upload",
        element: <UploadFont />,
      },
      {
        path: "/fonts",
        element: <Fonts/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
