import React from "react";

const CalendarPage = ({ year }) => {
  const generateMonths = () => {
    const months = [];
    for (let month = 0; month < 12; month++) {
      const date = new Date(year, month, 1);
      const monthName = date.toLocaleDateString("en-US", { month: "long" });
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const startDay = new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.
      const weeks = [];

      let dayCounter = 1;

      for (let week = 0; dayCounter <= daysInMonth; week++) {
        const days = [];

        for (let day = 0; day < 7; day++) {
          if ((week === 0 && day < startDay) || dayCounter > daysInMonth) {
            days.push(null);
          } else {
            days.push(dayCounter);
            dayCounter++;
          }
        }

        weeks.push(days);
      }

      months.push({ monthName, weeks });
    }
    return months;
  };

  return (
    <div>
      <h2>Year {year} Calendar</h2>
      <div className="year-calendar">
        {generateMonths().map((month, index) => (
          <div key={index} className="month-calendar">
            <h3>{month.monthName}</h3>
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
              <tbody>
                {month.weeks.map((week, weekIndex) => (
                  <tr key={weekIndex}>
                    {week.map((day, dayIndex) => (
                      <td key={dayIndex}>{day !== null ? day : ""}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;
