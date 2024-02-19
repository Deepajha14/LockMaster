import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

/** import all Components */
import Register from "./Pages/Register";
import Credentials from "./Pages/Credentials";
import Collections from "./Pages/Collections";
import Login from "./Components/LoginForm";

function User() {
  return (
    <div className="user">
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/credentials" element={<Credentials/>}></Route>
          <Route path="/collections" element={<Collections/>}></Route>
        </Routes>
    </div>
  );
}

export default User;