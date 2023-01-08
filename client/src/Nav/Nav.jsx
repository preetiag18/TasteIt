import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import classes from "./Nav.module.css";

const Nav = () => {
  const [responsive, setResponsive] = useState(false);
  const onHeaderClick = () => {
    setResponsive(!responsive);
  };
  return (
    <nav>
      <button className={classes.mob_button} onClick={onHeaderClick}>
        <MenuRoundedIcon />
      </button>
      <ul className={responsive ? classes.displayUl : classes.hideUl}>
        <li className={responsive ? classes.displayLi : ""}>
          <NavLink
            to="/"
            className={responsive ? classes.displayLiA : ""}
            onClick={onHeaderClick}
          >
            Home
          </NavLink>
        </li>
        <li className={responsive ? classes.displayLi : ""}>
          <NavLink
            to="recipes"
            className={responsive ? classes.displayLiA : ""}
            onClick={onHeaderClick}
          >
            Recipes
          </NavLink>
        </li>
        <li className={responsive ? classes.displayLi : ""}>
          <NavLink
            to="addnewrecipes"
            className={responsive ? classes.displayLiA : ""}
            onClick={onHeaderClick}
          >
            Add new recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
