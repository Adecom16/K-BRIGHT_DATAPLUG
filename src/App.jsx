// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Footer } from "./components/layouts/Footer";

import { HomePage } from "./components/pages/Homepage";
import AboutPage from "./components/pages/About";
import Contact from "./components/pages/Contact";

import Login from "./components/service/Login";
import Register from "./components/service/Register";
import Dashboard from "./components/service/Dashboard";
import { AuthProvider } from "./components/context/AuthContext";
// import {UserProvider} from './components/context/UserContext'
import Profile from "../src/components/service/Minicomponents/Profile";
import Performance from "../src/components/service/Minicomponents/Performance";
import Data from "../src/components/Utils/Data";
import Airtime from "../src/components/Utils/Airtime";
import Cable from "../src/components/Utils/Cable";
import ElectricityBillingPage from "./components/Utils/Electricity";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/data" element={<Data />} />
            <Route path="/airtime" element={<Airtime />} />
            <Route path="/cabletv" element={<Cable />} />
            <Route path="/electricity" element={<ElectricityBillingPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
