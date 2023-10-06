import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class CalendarPage extends Component {
  render() {
    return (
      <div>
        <h2>Calendar</h2>
        <Calendar />
      </div>
    );
  }
}

export default CalendarPage;
