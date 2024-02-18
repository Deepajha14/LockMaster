import React from 'react'
import "../LoginForm/style.css"

export default function RegisterForm() {
  return (
    <div className="signup-box">
      <form className='login-form'>
        <input
            name="username"
            placeholder="Username"
            className="form-input-box"
            type="username"
        />
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
        <input
          type="button"
          value="Create Account"
          className="submit-btn"
        />
      </form>
      <div className="login-signup">Already have an Account? <span>Sign In</span></div>
    </div>
  )
}