import React, { useState } from "react";
import { API_PATH } from "../../utilities/ApiPath";

const Register = ({ showLoginHandler }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_PATH}user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Corrected header
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setUsername("");
        setEmail("");
        setPassword("");
        alert("User registered successfully");
        showLoginHandler();
      } else {
        setError(data.message || "Registration failed");
        console.log("Registration failed", data);
        alert("Registration failed");
      }
    } catch (error) {
      console.log("Registration failed", error);
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registerSection">
      <form className="authForm" onSubmit={handleSubmit}>
        <h3>User Registration</h3>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btnSubmit">
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Register;
