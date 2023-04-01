import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Goalio.png";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import "../styles/NavBar.css";

//Line 6:

export const NavBar = ({ theme, handleThemeChange }) => {
  return (
    <nav className="navBar">
      <div className="logo">
        <img src={logo} alt={logo} />
      </div>
      <div className="navLinks">
        <ul>
          <li>
            <Link to="/football">Football</Link>
          </li>
          <li>
            <Link to="/football">Baseball</Link>
          </li>
          <li>
            <Link to="/football">Basketball</Link>
          </li>
        </ul>
      </div>
      <div className="themeSwitch">
        <button onClick={handleThemeChange}>
          {theme === "light" ? <IoIosMoon /> : <IoIosSunny />}
        </button>
      </div>
    </nav>
  );
};
