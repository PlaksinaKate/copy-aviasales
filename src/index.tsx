import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "routes";
import React from "react";
import "app/assets/styles/main.scss";

const router = createBrowserRouter(routes);
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container not found");
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
