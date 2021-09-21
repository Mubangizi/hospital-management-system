import React from "react";
import SubHeader from "../../components/Header/SubHeader";
import Layout from "../../components/Layout";
import ProfileInfo from "../../components/ProfileInfo";
const ProfilePage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default ProfilePage;
