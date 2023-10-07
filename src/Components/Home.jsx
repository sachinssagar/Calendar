import React from "react";
import { FaCalendarAlt, FaMousePointer, FaKeyboard } from "react-icons/fa";

const Home = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "85vh",
    background: "linear-gradient(135deg, #3498db, #e74c3c)",
    color: "#fff",
  };

  const contentStyle = {
    textAlign: "center",
    padding: "2rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const iconStyle = {
    fontSize: "2rem",
    marginRight: "8px",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>Welcome to My Colorful Calendar App!</h1>
        <ul style={{ listStyleType: "none", padding: "0", textAlign: "left" }}>
          <li>
            <FaCalendarAlt style={iconStyle} /> View a calendar for the entire
            year or for a single month.
          </li>
          <li>
            <FaMousePointer style={iconStyle} /> The calendar is interactive and
            will respond to user input. Try clicking on a day!
          </li>
          <li>
            <FaKeyboard style={iconStyle} /> The calendar will also respond to
            keyboard input. Try using the arrow keys to navigate the calendar!
          </li>
        </ul>
        <p>
          Get started by clicking on "Year" or "Month" in the navigation bar.
        </p>
      </div>
    </div>
  );
};

export default Home;
