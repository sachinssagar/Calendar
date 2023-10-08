import React, { useState } from "react";
import "./Month.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CalendarApp() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value, 10));
  };

  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCalendar(true);
  };

  const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();
  const getFirstDayOfWeek = (year, month) =>
    new Date(year, month - 1, 1).getDay();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = getFirstDayOfWeek(year, month);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const currentMonthDays = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  const emptyDaysBefore = Array.from({ length: firstDayOfWeek });

  const totalDays = emptyDaysBefore.length + currentMonthDays.length;
  const remainingDays = 42 - totalDays;

  const emptyDaysAfter = Array.from({ length: remainingDays });

  const daysMatrix = [
    ...emptyDaysBefore,
    ...currentMonthDays,
    ...emptyDaysAfter,
  ];

  const monthLabel = new Date(year, month - 1).toLocaleString("default", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="container">
      <h1 className="text-center">Month Calendar</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Enter the year:</label>
          <input
            type="number"
            className="form-control"
            value={year}
            onChange={handleYearChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter the month:</label>
          <input
            type="number"
            className="form-control"
            value={month}
            onChange={handleMonthChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {showCalendar && (
        <>
          <h2 className="text-center">{monthLabel}</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                {weekDays.map((day) => (
                  <th key={day} className="text-center">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {daysMatrix
                    .slice(rowIndex * 7, (rowIndex + 1) * 7)
                    .map((day, index) => (
                      <td key={index}>{day}</td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default CalendarApp;
