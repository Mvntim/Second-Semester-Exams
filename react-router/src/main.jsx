import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";

import Home from "./views/Home";
import About from "./views/About";
import Posts from "./views/Posts";
import Post from "./views/Post";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/posts/:postId",
    element: <Post />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
