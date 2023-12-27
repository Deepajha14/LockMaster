import React from "react";
import GLogo from "../../Assets/Google__G__logo.png";
import "./style.css";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import Email from "../Email";
import OTP from "../OTP";

export default function Register() {
  return (
    <div className="login-bg">
      <div className="login-box">
        <div className="header-bg"></div>

        <div className="login-base">
          <div className="login-base-heading">
            <h1>Login or Sign Up</h1>
            <div className="cross-btn">
              <RxCross2 />
            </div>
          </div>

          <div className="login-base-content">
            <a href="www.google.com" className="continue-google-box">
              <img src={GLogo} alt="Google logo" />
              <div>Continue with Google</div>
            </a>

            <div className="or">
              <div className="hr-line"></div>
              <span>or</span>
              <div className="hr-line"></div>
            </div>

            <Email />
            {/* <OTP/> */}

            <div className="terms-conditions">
              By logging in you are agree with our{" "}
              <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>
            </div>
          </div>

          <div className="features">
            <div>
              <TiTick className="tick" />
              <span>Full Access</span>
            </div>

            <div>
              <TiTick className="tick" />
              <span>Lock.Sync.Secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
