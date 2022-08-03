import React from "react";
import './login.css'

export function Login() {
  return (
    <div className="login-background">
      <div className="login-left">
        <h1>New here?</h1>
        <p>Register clicking the button</p>
        <button>Register</button>
      </div>
      <div className="login-right">
        <div className="form-container">
        <h1>Sign in</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <div>
        </div>
      </div>
      </div>
    </div>
  );
}
