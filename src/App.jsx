import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MonthView from "./Components/MonthView";
import Navbar from "./Components/Navbar";
import YearCalendar from "./Components/Year";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/year" element={<YearCalendar />} />
            <Route path="/month" element={<MonthView />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
