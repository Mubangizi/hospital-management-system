import { Container } from "@material-ui/core";
import React from "react";
import Header from "../../components/Header";
import { API } from "../../utils";
import DefaultBarGraph from "../../components/Graphs";
import { useEffect } from "react";

const SingleHospitalPage = (props) => {
  const [hospital, setHospital] = React.useState([]);
  const hospitalId = props.location.pathname.split("/")[2];

  const getHospital = async () => {
    await API.get(`/hospitals/${hospitalId}`)
      .then((res) => {
        setHospital(res.data.hospital);
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };

  useEffect(() => {
    getHospital();
    // getInfections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Layout">
      <Header title={hospital?.alias} />
      <Container>
        <div className="HomeLayout">
          <div>
            <h1>{hospital?.name}</h1>
            <div>Location</div>
            <DefaultBarGraph hospitalId={hospitalId} />
            <h2>Overall Infections per hospital</h2>
            <div className="DiseaseGraphsSection">
              {/* {hospitals.map((hospital) => (
              <HospitalGraph hospital={hospital} />
            ))} */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleHospitalPage;
