import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { API } from "../../utils";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";

const options = {
  scales: {
    x: {
      display: false,
    },
  },
};

const DiseaseGraph = ({ disease }) => {
  const [patients, setPatients] = useState([]);
  const patientsLabels = patients.map((patient) => patient?.date_created);
  const patientsNo = patients.map((patient) => patient?.no_of_patients);
  const getPatients = async () => {
    await API.get(`/diseases/${disease.id}/patients`)
      .then((res) => {
        setPatients(res.data?.patients);
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };

  useEffect(() => {
    getPatients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const chartData = {
    labels: patientsLabels,
    datasets: [
      {
        label: `${disease.name} Infections Number`,
        data: patientsNo,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default DiseaseGraph;

export const HospitalGraph = ({ hospital }) => {
  const [patients, setPatients] = useState([]);
  const patientsLabels = patients.map((patient) => patient?.date_created);
  const patientsNo = patients.map((patient) => patient?.no_of_patients);
  const getPatients = async () => {
    await API.get(`/hospitals/${hospital.id}/patients`)
      .then((res) => {
        setPatients(res.data?.patients);
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };

  useEffect(() => {
    getPatients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chartData = {
    labels: patientsLabels,
    datasets: [
      {
        label: `${hospital.name} Infections Number`,
        data: patientsNo,
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};
