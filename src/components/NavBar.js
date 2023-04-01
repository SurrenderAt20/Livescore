import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Goalio.png";
import {
  IoIosFootball,
  IoIosBaseball,
  IoIosBasketball,
  IoIosMoon,
  IoIosSunny,
} from "react-icons/io";
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
            <NavLink to="/football" activeClassName="active">
              <IoIosFootball /> Football
            </NavLink>
          </li>
          <li>
            <NavLink to="/baseball" activeClassName="active">
              <IoIosBaseball /> Baseball
            </NavLink>
          </li>
          <li>
            <NavLink to="/basketball" activeClassName="active">
              <IoIosBasketball />
              Basketball
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="themeSwitch">
        <button onClick={handleThemeChange}>
          {theme === "light" ? (
            <IoIosMoon size={50} />
          ) : (
            <IoIosSunny size={50} />
          )}
        </button>
      </div>
    </nav>
  );
};
