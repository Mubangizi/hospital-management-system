import React from "react";
import SubHeader from "../../components/Header/SubHeader";
import Layout from "../../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="Container">
        <div className="HomeMainContent">
          <SubHeader />
          <h1>hey</h1>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
