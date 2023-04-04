import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import App from "./App";
import Login from "./pages/Login";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "users",
        element: <List />,
        children: [
          {
            path: ":userId",
            element: <Single />
          },
          {
            path: "new",
            element: <New />
          }
        ],
      },
      {
        path: "products",
        element: <List />,
        children: [
          {
            path: ":productId",
            element: <Single />,
          },
          {
            path: "new",
            element: <New />
          },
        ],
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
