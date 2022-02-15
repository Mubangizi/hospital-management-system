import { Container } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header";
import { API } from "../../utils";
import DefaultBarGraph from "../../components/Graphs";
import { useEffect } from "react";
import DiseaseGraph, {
  HospitalGraph,
} from "../../components/Graphs/DiseaseGraph";
import "./HomePage.css";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const HomePage = () => {
  const [{ hospitals, diseases }, dispatch] = useStateValue();
  const getHospitals = async () => {
    await API.get(`/hospitals`)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_HOSPITALS,
          hospitals: res.data.data.hospitals,
        });
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };

  const getDiseases = async () => {
    await API.get(`/diseases`)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_DISEASES,
          diseases: res.data.data.diseases,
        });
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };
  useEffect(() => {
    getDiseases();
    getHospitals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Layout">
      <Header />
      <Container>
        <div className="HomeLayout">
          <h2>Overall Patients data</h2>
          <DefaultBarGraph />
          <h2>Overall Infections per disease</h2>
          <div className="DiseaseGraphsSection">
            {diseases.map((disease) => (
              <DiseaseGraph disease={disease} />
            ))}
          </div>
          <h2>Overall Infections per hospital</h2>
          <div className="DiseaseGraphsSection">
            {hospitals.map((hospital) => (
              <HospitalGraph hospital={hospital} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
