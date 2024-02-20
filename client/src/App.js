import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

/** import all Components */
import Landing from "./Pages/Landing";
import User from "./user.js";
import Auth from "./auth.js";
import PageNotFound from "./Components/PageNotFound";

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/auth/*",
    element: <Auth/>
  },
  {
    path: "/user/*",
    element: <User/>
  },
  {
    path: "*",
    element: <PageNotFound/>,
  },
]);

function App() {
  return (
    <div className="app">
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
    </div>
  );
}

export default App;
