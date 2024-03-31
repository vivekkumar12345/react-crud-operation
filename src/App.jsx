import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./contents/login";
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from "./contents/dashboard";
import Addmember from "./contents/addmember.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/addmember",
    element: <Addmember />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
