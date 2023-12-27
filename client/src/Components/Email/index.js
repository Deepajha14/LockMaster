import React from "react";
import "./style.css";

export default function Email() {
  return (
    <form className="email-form">
      <input
        placeholder="Email"
        className="email-input-box"
        type="email"
      ></input>
      <button className="continue-btn" type="submit">
        Continue with Email
      </button>
    </form>
  );
}
