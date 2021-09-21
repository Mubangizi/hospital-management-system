import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderLogo">HMS</div>
      <div className="HeaderAccountInfo">
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
