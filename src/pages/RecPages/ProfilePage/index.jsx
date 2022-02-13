import React from "react";
import SubHeader from "../../../components/Header/SubHeader";
import { SubLayout } from "../../../components/Layout";
import ProfileInfo from "../../../components/ProfileInfo";
const ProfilePage = () => {
  return (
    <SubLayout>
      <div className="Container">
        <div className="HomeMainContent">
          <SubHeader
            title="Doctor"
            searchWord="Search for Doctor"
            addButton="Add Doctor"
          />
          <ProfileInfo />
        </div>
      </div>
    </SubLayout>
  );
};

export default ProfilePage;
