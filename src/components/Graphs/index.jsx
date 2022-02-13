import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { API } from "../../utils";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";

const DefaultBarGraph = () => {
  const [patients, setPatients] = useState([]);
  const patientsLabels = patients.map((patient) => patient?.date_created);
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

  useEffect(() => {
    getPatients();
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
