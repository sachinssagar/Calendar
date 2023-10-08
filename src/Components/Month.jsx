import React, { useState } from "react";
import "./Month.css";

const MonthCalendar = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [calendar, setCalendar] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [monthError, setMonthError] = useState("");

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      generateMonthCalendar();
    }
  };

  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    if (selectedMonth >= 1 && selectedMonth <= 12) {
      setMonth(selectedMonth);
      setMonthError("");
    } else {
      setMonth("");
      setMonthError("Month must be between 1 and 12.");
    }
  };

  const generateMonthCalendar = () => {
    if (!year || !month || year.length !== 4 || !(month >= 1 && month <= 12)) {
      setMonthError(
        "Please enter a valid 4-digit year and a month between 1 and 12."
      );
      setShowCalendar(false);
      return;
    }

    const date = new Date(year, month - 1, 1); // Subtract 1 from month since it's zero-based
    const monthName = date.toLocaleString("default", { month: "long" });

    const monthCalendar = generateMonthTable(date);

    setCalendar([
      <div key={0} className="month-calendar">
        <h2>{monthName}</h2>
        {monthCalendar}
      </div>,
    ]);
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

    // Set all empty days to empty cells
    for (let i = 0; i < startDayOfWeek; i++) {
      daysInMonth.push(<td key={`empty-${i}`} className="empty-cell"></td>);
    }

    // Add a table row for each week in the month
    for (let day = 1; day <= totalDays; day++) {
      daysInMonth.push(<td key={day}>{day}</td>);

      // If the day of the week is Saturday or the last day of the month, add a new table row
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
          onKeyPress={handleKeyPress}
        />
      </div>
      {monthError && <div className="error">{monthError}</div>}
      {showCalendar && calendar}
      <button onClick={generateMonthCalendar}>Submit</button>
    </div>
  );
};

export default MonthCalendar;
