import React from "react";
import GLogo from "../../Assets/Google__G__logo.png"
import './style.css'
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

export default function Login() {
  return (
    <div className="login-bg">
        <div className="login-box">
            <div className="header-bg"></div>
            <div className="login-base">
                <div className="login-base-heading">
                    <h1>Login or Sign Up</h1>
                    <div className="cross-btn"><RxCross2 /></div>
                </div>
                <div className="login-base-content">
                    <a href="www.google.com" className="continue-google-box">
                        <img src={GLogo} alt="Google logo"/>
                        <div>Continue with Google</div>
                    </a>
                    <div className="or">
                        <div className="hr-line"></div>
                        <span>or</span>
                        <div className="hr-line"></div>
                    </div>
                    <form className="login-details">
                        <input placeholder="Email" className="email-input-box" type="email"></input>
                        <button className="continue-btn">Continue with Email</button>
                        {/* <h2 className="otp-heading">Check your inbox</h2>
                        <div className="otp-desc">We've sent verification code to dummy@gmail.com</div>
                        <div className="otp-outer-container">
                            <div className="otp-inner-container">
                                <input className="otp-input" id="1" ></input>
                                <input className="otp-input" id="2" ></input>
                                <input className="otp-input" id="3" ></input>
                                <input className="otp-input" id="4" ></input>
                            </div>
                        </div> */}
                    </form>
                    <div className="terms-conditions">
                        By logging in you are agree with our <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>
                    </div>
                </div>
                <div className="features">
                    <div>
                        <TiTick className="tick"/>
                        <span>Full Access</span>
                    </div>
                    <div>
                        <TiTick className="tick"/>
                        <span>Lock.Sync.Secure</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
