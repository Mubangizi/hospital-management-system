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

const AddPatientsForm = ({ handleClose }) => {
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
        <div className="FormHeading">Add Todays Infections</div>

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
        <TextField
          id="outlined-basic"
          label="Number of infected patients"
          variant="outlined"
          type="number"
        />

        <div className="FormFooter">
          <Button className="CancelBtn" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="AddBtn">Add Data</Button>
        </div>
      </form>
    </div>
  );
};

export default AddPatientsForm;
