import { Box, Button, IconButton, Modal } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import AddPatientsForm from "../Forms/AddPatientsForm";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "0.5rem",
  p: 4,
};

const SubHeader = ({
  title = "Dashboard",
  addButton = null,
  searchWord = null,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      {addButton && (
        <Button className="AddBtn" onClick={handleOpen}>
          {addButton}
        </Button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddPatientsForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default SubHeader;
