import React from 'react'
import "./style.css"

export default function LoginForm() {
  return (
    <div className="login-box">
      <form className='login-form'>
        <input
          name="email"
          placeholder="Email"
          className="form-input-box"
          type="email"
        />
        <input
          name="password"
          placeholder="Password"
          className="form-input-box"
          type="password"
        />
        <div className="forgot-pwd">Forgot Password?</div>
        <input
          type="button"
          value="Login"
          className="submit-btn"
        />
      </form>
      <div className="login-signup-form">Don't have an Account? <span>Sign Up</span></div>
    </div>
  )
}
