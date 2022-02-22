import { Container } from "@material-ui/core";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import SideBar, { SubSideBar } from "../SideBar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header dashboard />
      <div className="DashboardWrapper">
        <SideBar />
        <main>
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
};

export default Layout;

export const SimpleLayout = ({ children, title }) => {
  return (
    <div className="Layout SimpleLayout">
      <div>
        <Header title={title} />
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
};

export const SubLayout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      <div>
        <SubSideBar />
        <main>
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
};
