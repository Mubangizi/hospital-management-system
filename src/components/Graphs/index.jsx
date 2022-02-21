import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import dateFormat from "dateformat";
import { API } from "../../utils";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";

const DefaultBarGraph = ({ hospitalId = false, diseaseId = false }) => {
  const [patients, setPatients] = useState([]);
  const patientsLabels = patients.map((patient) =>
    dateFormat(patient?.date_created, "mmm dd, yyyy")
  );
  const patientsNo = patients.map((patient) => patient?.no_of_patients);
  const getPatients = async () => {
    await API.get(`/patients`)
      .then((res) => {
        setPatients(res.data?.patients);
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };

  const getHospitalsPatients = async () => {
    await API.get(`/hospitals/${hospitalId}/patients`)
      .then((res) => {
        setPatients(res.data.patients);
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };

  const getDiseasesPatients = async () => {
    await API.get(`/diseases/${diseaseId}/patients`)
      .then((res) => {
        setPatients(res.data.patients);
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };

  useEffect(() => {
    if (hospitalId) {
      getHospitalsPatients();
    } else if (diseaseId) {
      getDiseasesPatients();
    } else {
      getPatients();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const chartData = {
    labels: patientsLabels,
    datasets: [
      {
        label: "Infections Number",
        data: patientsNo,
        fill: true,
        backgroundColor: "rgb(53, 162, 235)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default DefaultBarGraph;
