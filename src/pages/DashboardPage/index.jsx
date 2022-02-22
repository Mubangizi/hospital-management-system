import React from "react";
import { useEffect } from "react";
import SmallInfoCard from "../../components/Cards/SmallInfoCard";
import DefaultBarGraph from "../../components/Graphs";
import SubHeader from "../../components/Header/SubHeader";
import Layout from "../../components/Layout";
import { API } from "../../utils";
import "./Dashboard.css";
const DashboardPage = () => {
  const hospitalId = localStorage.getItem("hospital_id", "");
  const [hospital, setHospital] = React.useState({});

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className="Container">
        <div className="HomeMainContent">
          <SubHeader title={hospital?.name} addButton="Add Patients" />
          <h2>Overall infections in period of one year</h2>
          <div className="CardList">
            {Object.keys(hospital).length !== 0 &&
              hospital?.diseases.map((disease) => (
                <SmallInfoCard
                  name={disease.name}
                  value={disease.no_of_infections}
                />
              ))}
          </div>

          <div className="HomeSection">
            <h2>Graph showing overall infection trends</h2>
            <DefaultBarGraph hospitalId={hospitalId} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
