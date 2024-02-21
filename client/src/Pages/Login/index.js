import React, {useState} from 'react'
import "./style.css"
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);

  return (
  <div className="login-page">
    <div className="switch-page">
      <div>New to LockMaster?</div>
      <Link to = "/auth/register">Create an Account</Link>
    </div>
    <form className="login-content">
      <h1>Login to LockMaster.</h1>
      <label>EMAIL</label>
      <input type="email" placeholder="Enter your email to log in." className="input-container"/>
      <label>PASSWORD</label>
      <div className="input-container">
        <input type={showPwd ? "text" : "password"} placeholder="Enter your password here"/>
        <div onClick={() => {setShowPwd(!showPwd)}}>{showPwd ? <FaRegEye /> : <FaRegEyeSlash/>}</div>
      </div>
      <button type="submit">Log In</button>
    </form>
  </div>
  )
}
