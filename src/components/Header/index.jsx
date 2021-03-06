import React from "react";
import "./Header.css";
import { Avatar, Container } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

const Header = ({ showAvator, title, dashboard = false }) => {
  const username = localStorage.getItem("username", "");
  return (
    <div className="HeaderWrapper">
      {dashboard ? (
        <div className="Header">
          <div className="HeaderRight">
            <Link to="/" className="HeaderLogo">
              PHRMS
            </Link>
            {title}
          </div>
          <div className="HeaderAccountInfo">
            <Avatar />
            Hi, {username}
          </div>
        </div>
      ) : (
        <Container>
          <div className="Header">
            <div className="HeaderRight">
              <Link to="/" className="HeaderLogo">
                PHRMS
              </Link>
              {title}
            </div>
            <div className="HeaderMenus">
              <NavLink to={{ pathname: `/hospitals` }}>Hospitals</NavLink>
              <NavLink to={{ pathname: `/diseases` }}>Diseases</NavLink>
            </div>
            <div></div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Header;
