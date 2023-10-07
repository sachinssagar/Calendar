// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MonthView from "./Components/MonthView";
import Navbar from "./Components/Navbar";
import YearView from "./Components/YearView";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/year" element={<YearView />} />
        <Route path="/month" element={<MonthView />} />
      </Routes>
    </Router>
  );
}

export default App;
