import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import HomePage from "../pages/home/HomePage";
import DashAuth from "../layout/DashAuth";
import Dashboard from "../pages/dashboard/Dashboard";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Register />,
        path: "register",
      },
      {
        index: true,
        element: <Login />,
        path: "login",
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashAuth />,
    children: [
      {
        path: "dash",
        element: <Dashboard />,
      },
    ],
  },
]);
