import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "../Nav/Nav";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink className={classes.title} to="/">
        <h2>TasteIt</h2>
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
