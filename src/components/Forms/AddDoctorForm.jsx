import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import "./Forms.css";

const AddDoctorForm = ({ handleClose }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const departments = [
    "Admissions",
    "Cardiology",
    "Anesthetics",
    "Burn Center",
    "Critical Care",
    "General Surgery    ",
  ];
  return (
    <div className="AddDoctorForm Card">
      <form action="" className="FormSection">
        <div className="FormHeading">Add Doctor</div>
        <div className="FormRow">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        </div>
        <TextField
          id="outlined-basic"
          label="Specialisation"
          variant="outlined"
        />
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Department
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            label="Department"
            value={age}
            onChange={handleChange}
            variant="outlined"
          >
            {departments.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="FormRow">
          <TextField id="outlined-basic" label="email" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          multiline
          rows={3}
        />
        <div className="FormFooter">
          <Button className="CancelBtn" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="AddBtn">Add Doctor</Button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctorForm;
