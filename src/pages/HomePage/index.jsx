import { Container } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header";
import { API } from "../../utils";

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
    getHospitals();
    getDiseases();
  }, []);
  console.log(hospitals);
  console.log(diseases);
  return (
    <div className="Layout">
      <Header />
      <Container>
        <div className="Show disease data">hey</div>
      </Container>
    </div>
  );
};

export default HomePage;
