import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import {RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./pages/About.jsx";
import GuestLayout from "./layouts/Guest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
  },
  {
    path: "/about",
    element: <About />,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
