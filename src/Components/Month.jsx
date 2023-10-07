import React, { useState } from "react";
import "./Month.css";

const MonthCalendar = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [calendar, setCalendar] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false); // Initially hide the calendar
  const [monthError, setMonthError] = useState(""); // State to hold validation error

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    if (selectedMonth >= 1 && selectedMonth <= 12) {
      setMonth(selectedMonth);
      setMonthError(""); // Clear any previous validation error
    } else {
      setMonth(""); // Clear the month if it's out of range
      setMonthError("Month must be between 1 and 12");
    }
  };

  const generateMonthCalendar = () => {
    // Check if year and month are valid
    if (!year || !month || year.length !== 4 || !(month >= 1 && month <= 12)) {
      setMonthError(
        "Please enter a valid 4-digit year and a month between 1 and 12."
      );
      setShowCalendar(false);
      return;
    }

    const calendarsArray = [];

    // Clear the previous calendar data
    setCalendar([]);

    const date = new Date(year, month - 1, 1); // Subtract 1 from month since it's zero-based
    const monthName = date.toLocaleString("default", { month: "long" });

    for (let i = 0; i < 1; i++) {
      const monthCalendar = generateMonthTable(date);

      calendarsArray.push(
        <div key={i} className="month-calendar">
          <h2>{monthName}</h2>
          {monthCalendar}
        </div>
      );

      date.setMonth(date.getMonth() + 1); // Move to the next month
    }

    setCalendar(calendarsArray);
    setShowCalendar(true);
  };

  const generateMonthTable = (date) => {
    const daysInMonth = [];
    const totalDays = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const startDayOfWeek = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();

    for (let i = 0; i < startDayOfWeek; i++) {
      daysInMonth.push(<td key={`empty-${i}`} className="empty-cell"></td>);
    }

    for (let day = 1; day <= totalDays; day++) {
      daysInMonth.push(<td key={day}>{day}</td>);

      if ((day + startDayOfWeek) % 7 === 0 || day === totalDays) {
        daysInMonth.push(<tr key={`week-${day}`} />);
      }
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{daysInMonth}</tbody>
      </table>
    );
  };

  return (
    <div className="month-calendar">
      <h1>Month Calendar</h1>
      <div className="input-container">
        <label htmlFor="year">Enter the year:</label>
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={handleYearChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="month">Enter the month:</label>
        <input
          type="number"
          placeholder="Month"
          value={month}
          onChange={handleMonthChange}
        />
      </div>
      {monthError && <div className="error">{monthError}</div>}{" "}
      {/* Display validation error if any */}
      <button onClick={generateMonthCalendar}>Submit</button>
      {showCalendar && calendar}{" "}
      {/* Display the calendar if showCalendar is true */}
    </div>
  );
};

export default MonthCalendar;
