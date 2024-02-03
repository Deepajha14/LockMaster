import React from "react";
import "./style.css";
import RegisterForm from "../../Components/RegisterForm";
import { TiTick } from "react-icons/ti";
import LoginForm from "../../Components/LoginForm";

export default function Register() {
  return (
    <div className="register-bg">
      <div className="register-box">
        <div className="header-bg"></div>

        <div className="register-base">
          <div className="register-base-heading">
            <h1>Login or Sign Up</h1>
          </div>

          <div className="register-base-content">
            <RegisterForm/>
            {/* <LoginForm /> */}
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
