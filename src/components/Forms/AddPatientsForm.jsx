import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import { API, getDiseases } from "../../utils";
import "./Forms.css";

const AddPatientsForm = ({ handleClose }) => {
  const hospitalId = localStorage.getItem("hospital_id", "");
  const [error, setError] = React.useState("");
  const [patientsData, setPatientsData] = React.useState({
    hospital_id: hospitalId,
  });
  const [{ diseases }, dispatch] = useStateValue();

  const handleChange = (event) => {
    event.preventDefault();
    setPatientsData({
      ...patientsData,
      [event.target.name]: event.target.value,
    });
  };

  const postPatientsData = async () => {
    await API.post(`/patients`, patientsData)
      .then((res) => {
        handleClose();
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
        setError("Opps something is not right, Try again");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postPatientsData();
  };
  useEffect(() => {
    getDiseases(dispatch);
  }, []);

  return (
    <div className="AddDoctorForm Card">
      <form action="" className="FormSection" onSubmit={handleSubmit}>
        <div className="FormHeading">Add Todays Infections</div>

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Disease
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            label="Disease"
            name="disease_id"
            onChange={handleChange}
            variant="outlined"
            required
          >
            {diseases.length > 0 &&
              diseases.map((disease) => (
                <MenuItem key={disease.name} value={disease.id}>
                  {disease.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Number of infected patients"
          variant="outlined"
          type="number"
          onChange={handleChange}
          name="no_of_patients"
          required
        />
        {error && <div className="Error">{error}</div>}

        <div className="FormFooter">
          <Button className="CancelBtn" onClick={handleClose}>
            Cancel
          </Button>

          <Button type="submit" className="AddBtn">
            Add Patient Data
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPatientsForm;
