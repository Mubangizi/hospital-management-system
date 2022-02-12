import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
const Header = ({ showAvator }) => {
  return (
    <div className="Header">
      <Link to="/" className="HeaderLogo">
        HMS
      </Link>
      {showAvator && (
        <div className="HeaderAccountInfo">
          <Avatar />
        </div>
      )}
    </div>
  );
};

export default Header;
