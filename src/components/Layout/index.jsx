import { Container } from "@material-ui/core";
import React from "react";
import SideBar from "../SideBar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <SideBar />
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
