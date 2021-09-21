import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import "./SideBar.css";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const SideBar = () => {
  const [open, setOpen] = React.useState(false);
  // const history = useHistory();

  const handleDrawer = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  // const sendToHome = () => {
  //   history.push("/");
  // };
  return (
    <div className="SideBar">
      <div className={`SideBarContent Side-${open}`}>
        <div>
          <div className="UserRoleSection">Administrator</div>
          <div className="NavItems">
            <NavLink to={{ pathname: `/` }} exact={true}>
              Dashboard
            </NavLink>
            <NavLink to={{ pathname: `/patients` }}>Patients</NavLink>
            <NavLink to={{ pathname: `/departments` }}>Departments</NavLink>
            <NavLink to={{ pathname: `/doctors` }}>Doctors</NavLink>
            <NavLink to={{ pathname: `/nurses` }}>Nurses</NavLink>
            <NavLink to={{ pathname: `/record_managers` }}>
              Record Managers
            </NavLink>
            <NavLink to={{ pathname: `/settings` }}>Settings</NavLink>
          </div>
        </div>
        <div className="RemarksSection">
          <p>© 2021 HMS</p>
        </div>
      </div>
      <div className="SideControllerBtn">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
        >
          {!open ? <MenuOutlinedIcon /> : <CloseOutlinedIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default SideBar;
