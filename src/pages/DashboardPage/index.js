import React from "react";
import SmallInfoCard from "../../components/Cards/SmallInfoCard";
import TableCard from "../../components/Cards/TableCard";
import SubHeader from "../../components/Header/SubHeader";
import Layout from "../../components/Layout";
import "./Dashboard.css";
const DashboardPage = () => {
  return (
    <Layout>
      <div className="Container">
        <div className="HomeMainContent">
          <SubHeader />
          <h2>Personnels</h2>
          <div className="CardList">
            <SmallInfoCard name="Doctors" value="100" />
            <SmallInfoCard name="Nurses" value="196" />
            <SmallInfoCard name="Patients" value="333" />
            <SmallInfoCard name="Rec Managers" value="52" />
          </div>
          <TableCard />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
