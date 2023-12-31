import React, { useState } from "react";
import "./Year.css";

const YearCalendar = () => {
  const [year, setYear] = useState("");
  const [calendars, setCalendars] = useState({}); // Store calendars by year
  const [showCalendar, setShowCalendar] = useState(false); // Initially hide the calendar

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      generateYearCalendars();
    }
  };

  const generateYearCalendars = () => {
    const yearCalendar = calendars[year]; // Get the calendar for the entered year

    if (!yearCalendar) {
      // If the calendar for the entered year has not been generated yet, then generate it now
      const calendarsArray = [];
      for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 1);
        const monthName = date.toLocaleString("default", { month: "long" });
        const monthCalendar = generateMonthCalendar(date);

        calendarsArray.push(
          <div key={month} className="month-calendar">
            <h2>{monthName}</h2>
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
              <tbody>{monthCalendar}</tbody>
            </table>
          </div>
        );
      }

      setCalendars({ ...calendars, [year]: calendarsArray });
    }

    // Show the calendar
    setShowCalendar(true);
  };

  const generateMonthCalendar = (date) => {
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

    // Fill in the leading empty cells
    for (let i = 0; i < startDayOfWeek; i++) {
      daysInMonth.push(<td key={`empty-${i}`} className="empty-cell"></td>);
    }

    // Populate the days of the month
    for (let day = 1; day <= totalDays; day++) {
      daysInMonth.push(<td key={day}>{day}</td>);

      // Start a new row for the next week
      if ((day + startDayOfWeek) % 7 === 0 || day === totalDays) {
        daysInMonth.push(<tr key={`week-${day}`} />);
      }
    }

    return daysInMonth;
  };

  return (
    <div className="year-calendar">
      <h1>Year Calendar</h1>
      <input
        type="number"
        placeholder="Enter The Year"
        value={year}
        onChange={handleYearChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={generateYearCalendars}>Submit</button>

      <div className="calendar-grid">{showCalendar && calendars[year]}</div>
    </div>
  );
};

export default YearCalendar;
