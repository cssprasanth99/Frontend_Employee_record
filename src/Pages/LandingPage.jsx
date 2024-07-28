import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import AddEmployee from "../components/forms/AddEmployee";
import Welcome from "../components/Welcome";
import AllEmployees from "../components/AllEmployees";
import { Route, Routes } from "react-router-dom";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showEmployees, setShowEmployee] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showAllEmployees, setShowAllEmployees] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      setShowLogout(true);
      setShowWelcome(true);
    } else {
      setShowLogin(true);
    }
  }, []);

  const logoutHandler = () => {
    if (confirm("Are you sure to logout?")) {
      localStorage.removeItem("loginToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      setShowLogout(false);
      setShowLogin(true);
      setShowWelcome(false);
      setShowEmployee(false);
      setShowAllEmployees(false);
    }
  };

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowEmployee(false);
    setShowWelcome(false);
    setShowAllEmployees(false);
  };

  const showRegisterHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowEmployee(false);
    setShowWelcome(false);
    setShowAllEmployees(false);
  };

  const showEmployeesHandler = () => {
    if (showLogout) {
      setShowLogin(false);
      setShowRegister(false);
      setShowEmployee(true);
      setShowWelcome(false);
      setShowAllEmployees(false);
    } else {
      alert("Please login");
      setShowLogin(true);
    }
  };

  const showWelcomeHandler = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowEmployee(false);
    setShowAllEmployees(false);
    setShowWelcome(true);
  };

  const showAllEmployeesHandler = () => {
    if (showLogout) {
      setShowLogin(false);
      setShowRegister(false);
      setShowEmployee(false);
      setShowWelcome(false);
      setShowAllEmployees(true);
    } else {
      alert("Please login");
      setShowLogin(true);
    }
  };

  return (
    <section className="landingSection">
      <Navbar
        showLoginHandler={showLoginHandler}
        showRegisterHandler={showRegisterHandler}
        showLogout={showLogout}
        logoutHandler={logoutHandler}
      />
      <div className="collectionSection">
        <Sidebar
          showEmployeesHandler={showEmployeesHandler}
          showAllEmployeesHandler={showAllEmployeesHandler}
        />
        {showLogin && <Login showWelcomeHandler={showWelcomeHandler} />}
        {showRegister && <Register showLoginHandler={showLoginHandler} />}
        {showEmployees && showLogout && <AddEmployee />}
        {showWelcome && <Welcome />}
        {showAllEmployees && showLogout && <AllEmployees />}
      </div>
    </section>
  );
};

export default LandingPage;
