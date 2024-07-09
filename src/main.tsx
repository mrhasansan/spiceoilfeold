import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootRoute } from "./routes/root";
import { HomeRoute } from "./routes/home";
import { ErrorPage } from "./routes/errorpage";

const router = createBrowserRouter([{ path: "/", element: <RootRoute />, errorElement: <ErrorPage />, children: [{ path: "/", element: <HomeRoute /> }] }]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
