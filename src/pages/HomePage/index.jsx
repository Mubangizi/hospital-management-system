import { Container } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header";
import { getDiseases, getHospitals } from "../../utils";
import DefaultBarGraph from "../../components/Graphs";
import { useEffect } from "react";
import DiseaseGraph, {
  HospitalGraph,
} from "../../components/Graphs/DiseaseGraph";
import "./HomePage.css";
import { useStateValue } from "../../StateProvider";
import Footer from "../../components/Footer";

const HomePage = () => {
  const [{ hospitals, diseases }, dispatch] = useStateValue();

  useEffect(() => {
    getDiseases(dispatch);
    getHospitals(dispatch);
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
      <Footer />
    </div>
  );
};

export default HomePage;
