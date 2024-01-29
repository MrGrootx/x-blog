import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import GuestLayout from "./layouts/Guest.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import PostDetails from "./pages/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/post/:id",
        element: <PostDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

// const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/x-blog/' });

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
