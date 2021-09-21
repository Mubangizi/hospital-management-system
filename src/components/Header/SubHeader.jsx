import { Button, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React from "react";

const SubHeader = ({
  title = "Dashboard",
  addButton = null,
  searchWord = null,
}) => {
  return (
    <div className="SubHeader">
      <div className="SubHeaderHeading">{title}</div>
      {searchWord && (
        <form action="" className="SearchBar">
          <input placeholder={searchWord} />
          <IconButton>
            <SearchOutlined />
          </IconButton>
        </form>
      )}
      {addButton && <Button className="AddBtn">{addButton}</Button>}
    </div>
  );
};

export default SubHeader;
