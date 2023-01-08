import React from "react";
import { NavLink } from "react-router-dom";

import RiceVideo from "./Rice.mp4";
import classnames from "classnames";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <video className={classes.bgVideo} autoPlay loop muted>
        <source src={RiceVideo} type="video/mp4"></source>
      </video>
      <div className={classes.caption}>
        <h1 className={classnames(classes.heading, classes.large_font)}>
          TasteIt
        </h1>
        <h2 className={classnames(classes.heading, classes.medium_font)}>
          TasteIt is the recipe app which is made in React22S group lessons
        </h2>
        <NavLink to="recipes" className={classes.heading}>
          <button className={classes.button}>Browse recipes</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
