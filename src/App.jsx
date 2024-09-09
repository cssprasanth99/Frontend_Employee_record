import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Login from "./components/forms/Login";
import UpadateEmployee from "./Pages/UpadateEmployee";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/:employeeId" element={<UpadateEmployee />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
