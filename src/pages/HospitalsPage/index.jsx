import React, { useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Header from "../../components/Header";
import "./HospitalsPage.css";
import { useStateValue } from "../../StateProvider";
import { HospitalGraph } from "../../components/Graphs/DiseaseGraph";
import { useHistory } from "react-router-dom";
import { getHospitals } from "../../utils";

const HospitalPage = () => {
  const history = useHistory();
  const [{ hospitals }, dispatch] = useStateValue();

  const gotToHosipital = (id) => {
    history.push(`/hospitals/${id}`);
  };
  useEffect(() => {
    getHospitals(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Layout">
      <Header title="Hospitals" />
      <Container>
        <div className="HomeLayout ">
          <div>
            <h1>Hospitals Section</h1>
            <p>
              Table showing available hospitals and total number on infections
              for all for a period of one year
            </p>
            <TableContainer className="WhiteBackground">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Alias&nbsp;</TableCell>
                    <TableCell align="right">District</TableCell>
                    <TableCell align="right">Total infections</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {hospitals.map((hospital) => (
                    <TableRow
                      key={hospital.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      className="HospiTableRow"
                      onClick={() => gotToHosipital(hospital.id)}
                    >
                      <TableCell component="th" scope="row">
                        {hospital.name}
                      </TableCell>
                      <TableCell align="right">{hospital.alias}</TableCell>
                      <TableCell align="right">{hospital.district}</TableCell>
                      <TableCell align="right">
                        {hospital.total_of_patients}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <h2>Hospitals Graph summary</h2>
            <p>
              Graphs showing summary of hospital infections for all diseases
              over a period of one year
            </p>
            <div className="DiseaseGraphsSection CardSection">
              {hospitals.map((hospital) => (
                <HospitalGraph hospital={hospital} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HospitalPage;
