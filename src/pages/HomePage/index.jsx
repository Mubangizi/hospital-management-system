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
import { Link } from "react-router-dom";

const HomePage = () => {
  const [{ hospitals, diseases }, dispatch] = useStateValue();

  useEffect(() => {
    getDiseases(dispatch);
    getHospitals(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(diseases);

  return (
    <div className="Layout">
      <Header />
      <Container>
        <div className="HomeLayout">
          <div className="HeroSection">
            <div>
              <h1>Welcome to PHRMS</h1>
              <p>
                <strong>Public Health Records Management System (PRMS)</strong>
                is a web application that collects and provides health
                information for Uganda that can be used to access health
                information.
              </p>
              <h2>Overall Patients data</h2>
              <p>
                This graph shows overall number of patients in the country that
                has been collected for the period of one year.
              </p>
              <DefaultBarGraph />
            </div>
          </div>

          <div>
            <h1>Hospital overview</h1>
            <p>
              PHRMS is currently collecting data for the following hospitals:
              <ul>
                {hospitals.map((hospital) => (
                  <li key={hospital.id}>
                    <Link className="HomeLink" to={`/hospitals/${hospital.id}`}>
                      <strong>{hospital.name}</strong>
                    </Link>
                  </li>
                ))}
              </ul>
            </p>

            <h2>Overall Infections per hospital</h2>
            <p>
              This graph shows the number of infections per hospital in the
              country for the period of one year.
            </p>
            <div className="DiseaseGraphsSection">
              {hospitals.map((hospital) => (
                <HospitalGraph hospital={hospital} />
              ))}
            </div>
          </div>
          <div>
            <h1>Disease overview</h1>
            <p>
              PHRMS is currently collecting data for the following diseases:
              <ul>
                {diseases.map((disease) => (
                  <li key={disease.id}>
                    <Link className="HomeLink" to={`/disease/${disease.id}`}>
                      <strong>{disease.name}</strong>
                    </Link>
                  </li>
                ))}
              </ul>
            </p>
            <h2>Overall Infections per disease</h2>
            <p>
              This graph shows the number of infections per disease in the
              country for the period of one year.
            </p>
            <div className="DiseaseGraphsSection">
              {diseases.map((disease) => (
                <DiseaseGraph disease={disease} />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
