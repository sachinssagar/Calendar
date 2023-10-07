import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10">
      <ul className="flex">
        <li className="mr-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li className="mr-4">
          <Link to="/year" className="hover:text-gray-400">
            Year
          </Link>
        </li>
        <li>
          <Link to="/month" className="hover:text-gray-400">
            Month
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
