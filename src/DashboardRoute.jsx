import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/service/User'

export default function DashboardRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
