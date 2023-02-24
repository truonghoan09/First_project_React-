import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div class="topnav">
      <Link to="/" class="active">
        Home
      </Link>
      <Link to="/products">Products</Link>
      <Link to="/weatherApp">Weather App</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Nav;
