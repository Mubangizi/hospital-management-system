import { Container } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import { API } from "../../utils";
import DefaultBarGraph from "../../components/Graphs";
import DiseaseGraph, {
  HospitalGraph,
} from "../../components/Graphs/DiseaseGraph";
import { useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [hospitals, setHospitals] = useState([]);
  const [diseases, setDiseases] = useState([]);
  const getHospitals = async () => {
    await API.get(`/hospitals`)
      .then((res) => {
        setHospitals(res.data?.data?.hospitals);
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };
  const getDiseases = async () => {
    await API.get(`/diseases`)
      .then((res) => {
        setDiseases(res.data?.data?.diseases);
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };
  useEffect(() => {
    getDiseases();
    getHospitals();
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
