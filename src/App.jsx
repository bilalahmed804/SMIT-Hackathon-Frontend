import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import ApplyForLoan from "./component/LoanForm"; // Add this if you have an ApplyForLoan component
import Home from "./component/Home"; // Add this if you have a Home component
import Login from "./component/Login";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar will be displayed on all pages */}
        <Navbar />

        {/* Define routes for different pages */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Dashboard Page */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Authentication Page (Login/Signup) */}
          <Route path="/auth" element={< Login/>} />

          {/* Apply for Loan Page */}
          <Route path="/apply" element={<ApplyForLoan />} />

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;