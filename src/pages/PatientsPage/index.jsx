import React from "react";
import { departments_summary } from "../../assets/data";
import TableCard from "../../components/Cards/TableCard";
import SubHeader from "../../components/Header/SubHeader";
import Layout from "../../components/Layout";
const PatientsPage = () => {
  const headingList = ["Date", "Number of Patients", "Disease"];
  return (
    <Layout>
      <div className="Container">
        <div className="HomeMainContent">
          <SubHeader title="Patients" addButton="Add Patients" />
          <TableCard
            title="Patients"
            dataList={departments_summary}
            headingList={headingList}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PatientsPage;
