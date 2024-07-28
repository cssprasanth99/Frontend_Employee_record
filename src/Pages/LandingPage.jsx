import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Login from "../components/forms/Login";
import Register from "../components/forms/Register";
import AddEmployee from "../components/forms/AddEmployee";
import Welcome from "../components/Welcome";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showEmployees, setShowEmployee] = useState(false);
  const [showWelcome, setShowWlecome] = useState(false);

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowEmployee(false);
    setShowWlecome(false);
  };

  const showRegisterHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowEmployee(false);
    setShowWlecome(false);
  };

  const showEmployeeshandler = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowEmployee(true);
    setShowWlecome(false);
  };

  const showWelcomeHandler = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowEmployee(false);
    setShowWlecome(true);
  };

  return (
    <>
      <section className="landingSection">
        <Navbar
          showLoginHandler={showLoginHandler}
          showRegisterHandler={showRegisterHandler}
        />
        <div className="collectionSection">
          <Sidebar showEmployeeshandler={showEmployeeshandler} />
          {showLogin && <Login showWelcomeHandler={showWelcomeHandler} />}
          {showRegister && <Register showLoginHandler={showLoginHandler} />}
          {showEmployees && <AddEmployee />}
          {showWelcome && <Welcome />}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
