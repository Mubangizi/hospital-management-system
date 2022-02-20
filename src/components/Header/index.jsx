import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
const Header = ({ showAvator, title }) => {
  return (
    <div className="Header">
      <div className="HeaderRight">
        <Link to="/" className="HeaderLogo">
          HMS
        </Link>
        {title}
      </div>
      <div className="HeaderMenus">
        <NavLink to={{ pathname: `/hospitals` }} exact={true}>
          Hospitals
        </NavLink>
        <NavLink to={{ pathname: `/diseases` }}>Diseases</NavLink>
      </div>
      <div></div>
      {showAvator && (
        <div className="HeaderAccountInfo">
          <Avatar />
        </div>
      )}
    </div>
  );
};

export default Header;
