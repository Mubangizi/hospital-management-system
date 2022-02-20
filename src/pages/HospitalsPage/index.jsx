import React from "react";
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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const HospitalPage = () => {
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  const [{ hospitals }, dispatch] = useStateValue();
  console.log(hospitals);

  return (
    <div className="Layout">
      <Header />
      <Container>
        <div className="HomeLayout ">
          <div>
            <h2>Hospitals Section</h2>
            <p>
              Table showing available hospitals and total number on infections
              for a period of one year
            </p>
            <TableContainer className="WhiteBackground">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Alias&nbsp;</TableCell>
                    <TableCell align="right">District</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {hospitals.map((hospital) => (
                    <TableRow
                      key={hospital.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {hospital.name}
                      </TableCell>
                      <TableCell align="right">{hospital.alias}</TableCell>
                      <TableCell align="right">{hospital.district}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <h2>Hospitals Graph summary</h2>
            <p>
              Graphs showing summary of hospital infections over a period of one
              year
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
