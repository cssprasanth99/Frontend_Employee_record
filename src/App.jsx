import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";

function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
