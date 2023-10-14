import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";

import DashboardLayout from "./layouts/Dashboard";
import Home from "./views/Home";
import About from "./views/About";
import Posts from "./views/Posts";
import Post from "./views/Post";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";

const routes = [
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
          {
            path: "/posts",
            children: [
              {
                index: true,
                element: <Posts />,
              },
              {
                path: ":postId",
                element: <Post />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
