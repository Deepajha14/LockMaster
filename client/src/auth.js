import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

/** import all Components */
import Register from "./Pages/Register";
import Login from "./Components/LoginForm";

function User() {
  return (
    <div className="user">
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
    </div>
  );
}

export default User;