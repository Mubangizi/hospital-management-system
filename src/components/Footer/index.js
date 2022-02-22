import { Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <div className="FooterContainer">
          <h2>HMS 2022</h2>
          <Link to="/dashboard">Go to dashboard</Link>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
