import React from "react";
import { Link } from "react-router-dom";

const navbarStyle = {
  backgroundColor: "#3498db",
  color: "#fff",
  padding: "10px 0",
};

const navbarListStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  padding: "0",
};

const navbarItemStyle = {
  marginRight: "20px",
};

const navbarLinkStyle = {
  textDecoration: "none",
  color: "#fff",
  fontWeight: "bold",
  transition: "color 0.3s ease",
};

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={navbarListStyle}>
        <li style={navbarItemStyle}>
          <Link to="/" style={navbarLinkStyle}>
            <i class="fa-solid fa-house"></i> Home
          </Link>
        </li>
        <li style={navbarItemStyle}>
          <Link to="/year" style={navbarLinkStyle}>
            <i className="far fa-calendar"></i> Year
          </Link>
        </li>
        <li style={navbarItemStyle}>
          <Link to="/month" style={navbarLinkStyle}>
            <i className="far fa-calendar-alt"></i> Month
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
