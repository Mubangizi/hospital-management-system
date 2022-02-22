import React from "react";
import { departments_summary } from "../../assets/data";
import TableCard from "../../components/Cards/TableCard";
import SubHeader from "../../components/Header/SubHeader";
import Layout from "../../components/Layout";
import "./Dashboard.css";
const DashboardPage = () => {
  const headingList = [
    "Name",
    "Number of Patients",
    "Number of Doctors",
    "Number of nurses",
  ];
  return (
    <Layout>
      <div className="Container">
        <div className="HomeMainContent">
          <SubHeader title="Dashboard" addButton="Add Patients" />

          <TableCard
            title="Departments"
            dataList={departments_summary}
            headingList={headingList}
          />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
