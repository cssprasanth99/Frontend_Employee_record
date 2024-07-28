import React from "react";

const Navbar = ({
  showLoginHandler,
  showRegisterHandler,
  showLogout,
  logoutHandler,
}) => {
  const userName = localStorage.getItem("userName");

  return (
    <div className="navbar">
      <div className="company">
        <h1>Employee Dashboard</h1>
      </div>
      <div className="username">
        <h4>User: {userName}</h4>
      </div>
      <div className="userAuth">
        {!showLogout ? (
          <>
            <span onClick={showLoginHandler} style={{ cursor: "pointer" }}>
              Login |
            </span>
            <span onClick={showRegisterHandler} style={{ cursor: "pointer" }}>
              Register
            </span>
          </>
        ) : (
          <span onClick={logoutHandler} style={{ cursor: "pointer" }}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
