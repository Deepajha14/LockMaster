import React from "react";
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

/** import all Components */
import Landing from "./Pages/Landing";
import User from "./user.js";
// import Navbar from "./Components/Navbar";
// import Dashboard from "./Pages/Dashboard";
// import Register from "./Pages/Register";
import PageNotFound from "./Components/PageNotFound";

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
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
      {/* <Navbar /> */}
      <main>
        <RouterProvider router={router}></RouterProvider>
      </main>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
