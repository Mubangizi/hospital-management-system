import React from "react";
import { doctors_summary } from "../../assets/data";
import SmallInfoCard from "../../components/Cards/SmallInfoCard";
import TableCard from "../../components/Cards/TableCard";
import SubHeader from "../../components/Header/SubHeader";
import { SubLayout } from "../../components/Layout";
const DoctorsPage = () => {
  const headingList = ["Name", "Specialisation", "Department", "On Duty"];
  return (
    <SubLayout>
      <div className="Container">
        <div className="HomeMainContent">
          <SubHeader
            title="Doctors"
            searchWord="Search for Doctor"
            addButton="Add Doctor"
          />
          <h2>Summary</h2>
          <div className="CardList">
            <SmallInfoCard name="On Duty" value="80" />
            <SmallInfoCard name="On leave" value="20" />
          </div>
          <TableCard
            title="Doctors List"
            headingList={headingList}
            dataList={doctors_summary}
            link="/profile_info"
          />
        </div>
      </div>
    </SubLayout>
  );
};

export default DoctorsPage;
