import { Container } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <div>
        <SideBar />
        <main>
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
};

export default Layout;
