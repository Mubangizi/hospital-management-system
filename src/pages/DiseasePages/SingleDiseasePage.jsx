import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import Header from "../../components/Header";
import { API, getHospitals } from "../../utils";
import DefaultBarGraph from "../../components/Graphs";
import { useEffect } from "react";
import { HospitalGraph } from "../../components/Graphs/DiseaseGraph";
import { useStateValue } from "../../StateProvider";

const SingleDiseasePage = (props) => {
  const [disease, setDisease] = React.useState({});
  const diseaseId = props.location.pathname.split("/")[2];
  const [{ hospitals }, dispatch] = useStateValue();

  const getDisease = async () => {
    await API.get(`/diseases/${diseaseId}`)
      .then((res) => {
        setDisease(res.data.data.disease);
      })
      .catch((Err) => {
        console.log(`An error occured: ${Err}`);
      });
  };

  useEffect(() => {
    getDisease();
    if (hospitals.length === 0) {
      getHospitals(dispatch);
    }
    // getInfections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="Layout">
      <Header title={disease?.name} />
      <Container>
        <div className="HomeLayout">
          <div>
            <h1>{disease?.name}</h1>
            <p>{disease?.description}</p>
          </div>
          <div>
            <h2>Overall Infections of {disease?.name}</h2>
            <p>
              A graph showing all registered infections of {disease?.name} for
              the period of one year
            </p>
            <DefaultBarGraph diseaseId={diseaseId} />
          </div>
          <div>
            <h2>Overall Infections of {disease?.name} in hospitals</h2>
            <p>
              A table showing overall infections of {disease?.name} for the
              period of one year
            </p>
            <TableContainer className="SmallTable">
              <Table
                sx={{ minWidth: 100 }}
                aria-label="simple table"
                className="WhiteBackground"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Alias</TableCell>
                    <TableCell align="right">No of infections&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(disease).length !== 0 &&
                    disease?.diseases.map((disease) => (
                      <TableRow
                        key={disease.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        className="HospiTableRow"
                        // onClick={() => gotToHosipital(disease.id)}
                      >
                        <TableCell component="th" scope="row">
                          {disease.name}
                        </TableCell>
                        <TableCell align="right">{disease.alias}</TableCell>
                        <TableCell align="right">
                          {disease.no_of_infections}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <h2>Overall Infections per hospital</h2>
            <p>
              These are graphs showing the number of {disease?.name} infections
              per hospital for the period of one year
            </p>
            <div className="DiseaseGraphsSection">
              {hospitals.map((hospital) => (
                <HospitalGraph
                  hospital={hospital}
                  disease_id={disease.id}
                  bar
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleDiseasePage;
