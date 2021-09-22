import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import "./NotFoundPage.css";
const NotFoundPage = () => {
  return (
    <Layout>
      <div className="Container">
        <div className="HomeMainContent">
          <div className="NotFoundInfo">
            <h1>404</h1>
            <div>Opps !</div>
            <div>The page your looking for doesnt seem to be available</div>
            <Link to="/dashboard">Click to go back to home</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
