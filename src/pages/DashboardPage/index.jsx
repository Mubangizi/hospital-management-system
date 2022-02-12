import React from "react";
import { departments_summary } from "../../assets/data";
import SmallInfoCard from "../../components/Cards/SmallInfoCard";
import TableCard from "../../components/Cards/TableCard";
import SubHeader from "../../components/Header/SubHeader";
import { SubLayout } from "../../components/Layout";
import "./Dashboard.css";
const DashboardPage = () => {
  const headingList = [
    "Name",
    "Number of Patients",
    "Number of Doctors",
    "Number of nurses",
  ];
  return (
    <SubLayout>
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
          <TableCard
            title="Departments"
            dataList={departments_summary}
            headingList={headingList}
          />
        </div>
      </div>
    </SubLayout>
  );
};

export default DashboardPage;
