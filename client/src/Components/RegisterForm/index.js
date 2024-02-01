import React from "react";
import "./style.css";
// import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
// import Email from "../Email";
import UserName from "../UserName";

export default function RegisterForm() {
  return (
    // <div className="login-bg">
      <div className="login-box">
        <div className="header-bg"></div>

        <div className="login-base">

          <div className="login-base-heading">
            <h1>Login or Sign Up</h1>
            {/* <div className="cross-btn">
              <RxCross2 />
            </div> */}
          </div>

          <div className="login-base-content">
            {/* <Email /> */}
            <UserName/>

            <div className="terms-conditions">
              By logging in you are agree with our{" "}
              <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>
            </div>
          </div>

          <div className="features">
            <div>
              <TiTick className="tick" />
              <span>Already Registered</span>
            </div>

            <div>
              <TiTick className="tick" />
              <span>Lock.Sync.Secure</span>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}
