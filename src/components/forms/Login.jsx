import React, { useState } from "react";
import { API_PATH } from "../../utilities/ApiPath";

const Login = ({ showWelcomeHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_PATH}user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Login success");
        localStorage.setItem("loginToken", data.token);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("userName", data.username);
        setEmail("");
        setPassword("");
        showWelcomeHandler();
        window.location.reload();
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form className="authForm" onSubmit={loginHandler}>
        <h3>User Login</h3>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />{" "}
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
