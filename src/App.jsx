// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Footer } from "./components/layouts/Footer";

import  HomePage  from "./components/pages/Homepage";
import AboutPage from "./components/pages/About";
import Contact from "./components/pages/Contact";

import Login from "./components/service/Login";
import Register from "./components/service/Register";

import Profile from "../src/components/service/Minicomponents/Profile";
import Performance from "../src/components/service/Minicomponents/Performance";
import Data from "../src/components/Utils/Data";
import Airtime from "../src/components/Utils/Airtime";
import Cable from "../src/components/Utils/Cable";

import ElectricityBillingPage from "./components/Utils/Electricity";

import AuthProvider from 'react-auth-kit';
import RequireAuth from '@auth-kit/react-router/RequireAuth'
import createStore from 'react-auth-kit/createStore';
import "./App.css";
import User from "./components/service/User";
import Dashboard from "./components/service/Minicomponents/Dashboard";

function App() {
  const store = createStore({
    authType:"localstorage", 
    authName:"music_is_life",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });
  
  return (
  //  <>
    <AuthProvider  store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <RequireAuth fallbackPath="/login">
                <User/>
              </RequireAuth>
            }
          >

          <Route path="" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="performance" element={<Performance />} />
          <Route path="data" element={<Data />} />
          <Route path="airtime" element={<Airtime />} />
          <Route path="cabletv" element={<Cable />} />
          <Route path="electricity" element={<ElectricityBillingPage />} />

          </Route>
        </Routes>
      </Router>
    </AuthProvider>
    // </>
  );
}

export default App;
