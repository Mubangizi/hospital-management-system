import { Avatar } from "@material-ui/core";
import React from "react";
import "./ProfileInfo.css";
const ProfileInfo = () => {
  return (
    <div className="ProfileInfo Card">
      <div className="AvatarSection">
        <Avatar />
      </div>
      <div className="PersonalInfo ProfileSection">
        <div className="Username">Dr Martin Gram</div>
        <div className="Usertitle">Doctor</div>
        <div>
          <span>Specialist:</span> Cardiology
        </div>
        <div>
          <span>Departments:</span> Cardiology, Admissions, Anesthetics
        </div>
      </div>
      <hr />
      <div className="ContactInfo ProfileSection">
        <div className="UserEmail">martin@gmail.com</div>
        <div className="UserPhoneNumber">+256 7842 332 235</div>
        <div className="UserAddress">Buwama, Bweyogerere</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
