import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Register() {
  const [nextSection, setNextSection] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  return (
    <div className="register-page">
      <div className="switch-page">
        <div>Already a user?</div>
        <Link to = "/auth/login">Log in</Link>
      </div>
      <form>
        <div className="register-content" style={{display: `${nextSection? 'none' : 'flex'}`}}>
          <h1>Start using LockMaster for free.</h1>
          <p>Enter the email you'd like to associate with your LockMaster account.</p>
          <label>EMAIL</label>
          <input type="email" placeholder="Enter your email address here" className="input-container"/>
          <button type="button" onClick={() => {setNextSection(true)}}>Next</button>
        </div>
        <div className="set-password" style={{display: `${nextSection? 'flex' : 'none'}`}}>
          <h1>Create a strong and memorable Master Password.</h1>
          <p>We don't store your Master Password, so make sure you remember it.</p>
          <label>PASSWORD</label>
          <div className="input-container">
            <input type={showPwd ? "text" : "password"} placeholder="Enter your password here"/>
            <div onClick={() => {setShowPwd(!showPwd)}}>{showPwd ? <FaRegEye /> : <FaRegEyeSlash/>}</div>
          </div>
          <label>RE-ENTER YOUR MASTER PASSWORD</label>
          <div className="input-container">
            <input type={showPwd2 ? "text" : "password"} placeholder="Re-enter your password"/>
            <div onClick={() => {setShowPwd2(!showPwd2)}}>{showPwd2 ? <FaRegEye /> : <FaRegEyeSlash/>}</div>
          </div>
          <div className="btn-box">
            <button type="button" onClick={() => {setNextSection(false)}}>Back</button>
            <button type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
}
