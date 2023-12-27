import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

/** import all Components */
import Landing from "./Pages/Landing";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Register from "./Components/Register";
import PageNotFound from "./Components/PageNotFound";

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing></Landing>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </div>
  );
}

export default App;
