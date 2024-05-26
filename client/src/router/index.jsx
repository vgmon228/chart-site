import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/LoginPage";
import Home from "../views/HomePage";
import Add from "../views/AddPage";



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      return localStorage.getItem('token') ? redirect('/') : null
    }
  },
  {
    path: "/",
    element: <Home />,
    loader: () => {
      return !localStorage.getItem('token') ? redirect('/login') : null
    }
  },
  {
    path: "/add",
    element: <Add />,
    loader: () => {
      return !localStorage.getItem('token') ? redirect('/login') : null
    }
  },
])

export default router