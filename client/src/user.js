import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

/** import all Components */
import Sidebar from './Components/Sidebar';
import Credentials from "./Pages/Credentials";
import Collections from "./Pages/Collections";

function User() {
  return (
    <div className="user">
      <Sidebar/>
        <Routes>
          <Route path="/credentials" element={<Credentials/>}></Route>
          <Route path="/collections" element={<Collections/>}></Route>
        </Routes>
    </div>
  );
}

export default User;