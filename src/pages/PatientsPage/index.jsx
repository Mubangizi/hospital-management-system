import React from "react";
import { useEffect } from "react";
import dateFormat from "dateformat";
import TableCard from "../../components/Cards/TableCard";
import SubHeader from "../../components/Header/SubHeader";
import Layout from "../../components/Layout";
import { API, getDiseases } from "../../utils";
import { useStateValue } from "../../StateProvider";
const PatientsPage = () => {
  const [patients, setPatients] = React.useState([]);
  const hospitalId = localStorage.getItem("hospital_id", "");
  const [{ diseases }, dispatch] = useStateValue();
  const getPatients = async () => {
    await API.post(`/patients/filter`, {
      hospital_id: hospitalId,
    })
      .then((res) => {
        setPatients(res.data?.patients);
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };

  useEffect(() => {
    getPatients();
    getDiseases(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(diseases);
  const getDiseaseName = (diseaseId) => {
    if (diseases.length > 0) {
      const disease = diseases.find((disease) => disease.id === diseaseId);
      return disease?.name;
    } else {
      return null;
    }
  };
  const headingList = ["Date", "Disease", "Number of Patients"];
  const dataList = patients.map((patient) => [
    dateFormat(patient?.date_created, "mmm dd, yyyy"),
    getDiseaseName(patient.disease_id),
    patient.no_of_patients,
  ]);
  return (
    <Layout>
      <div className="Container">
        <div className="HomeMainContent">
          <SubHeader title="Patients" addButton="Add Patients" />
          {patients.length !== 0 && (
            <TableCard
              title="Patients"
              dataList={dataList}
              headingList={headingList}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PatientsPage;
