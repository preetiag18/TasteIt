import React from "react";
import { NavLink } from "react-router-dom";

import Hero from "../Hero/Hero";

import classes from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <Hero />
      <div className={classes.moreDetailsContainer}>
        <div className={classes.moreDetails}>
          <h3>Browse recipe</h3>
          <p>Find your favorite in this collection. You can seatmmö,......</p>
          <NavLink to="recipes">All recipes</NavLink>
        </div>
        <div className={classes.moreDetails}>
          <h3>Add recipe</h3>
          <p>
            Recipe from your country misssing...!! , no worries, you can add
            them now
          </p>
          <NavLink to="addnewrecipes">Add new recipes</NavLink>
        </div>
        <div className={classes.moreDetails}>
          <h3>Want to know more about our projects</h3>
          <p>Visit our website</p>
          <a href="https://bc.fi" target="_blank" rel="noreferrer">
            Business college helsinki homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
