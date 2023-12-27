import React from "react";
import "./style.css";

export default function OTP() {
  return (
    <div className="otp-container">
      <h2 className="otp-heading">Check your inbox</h2>
      <div className="otp-desc">
        We've sent verification code to dummy@gmail.com
      </div>
      <div className="otp-form-container">
        <form className="otp-inner-form">
          <input className="otp-input" type="number" id="1"></input>
          <input className="otp-input" type="number" id="2"></input>
          <input className="otp-input" type="number" id="3"></input>
          <input className="otp-input" type="number" id="4"></input>
        </form>
      </div>
    </div>
  );
}
