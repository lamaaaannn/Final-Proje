import React from "react";
import { NavLink, Navlink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navRight">
        <img src="./images/DevAcademy.png" alt="" srcset="" />
      </div>
      <div className="navLeft">
        <div className="links">
          <NavLink className="li" to="/">
            Home
          </NavLink>
          <NavLink className="li" to="/Services">
            Service
          </NavLink>
          <NavLink className="li" to="/Projects">
            Projects
          </NavLink>
          <NavLink className="li" to="/Blog">
            Blog
          </NavLink>
          <NavLink className="li" to="/About">
            About
          </NavLink>
        </div>
        <button> <NavLink className="li" to="/Contact">
            Contact
          </NavLink></button>
        <img className="menu" src="./images/menu.svg" alt="" />
      </div>
    </div>
  );
};
export default Navbar;
