import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/add-entry">Add Entry</NavLink>
      <NavLink to="/history">History</NavLink>
    </>
  );
};

export default Navbar;
