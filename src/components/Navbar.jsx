import React from "react";

const Navbar = ({ showLoginHandler, showRegisterHandler }) => {
  return (
    <div className="navbar">
      <div className="company">
        <h1>Employee Dashboard</h1>
      </div>
      <div className="userAuth">
        <span onClick={showLoginHandler} style={{ cursor: "pointer" }}>
          Login |
        </span>
        <span onClick={showRegisterHandler} style={{ cursor: "pointer" }}>
          {" "}
          Register
        </span>
      </div>
    </div>
  );
};

export default Navbar;
