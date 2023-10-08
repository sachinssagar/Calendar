import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Month.css";

function MonthApp() {
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(new Date(year, month - 1, 1));
  };

  return (
    <div>
      <h1>Month Calendar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the year:
          <input type="number" value={year} onChange={handleYearChange} />
        </label>
        <label>
          Enter the month:
          <input type="number" value={month} onChange={handleMonthChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Calendar value={date} />
    </div>
  );
}

export default MonthApp;
