import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import "./DiseasePage.css";
import { useStateValue } from "../../StateProvider";
import DiseaseGraph from "../../components/Graphs/DiseaseGraph";
import { useHistory } from "react-router-dom";
import { getDiseases } from "../../utils";
import { SimpleLayout } from "../../components/Layout";

const DiseasePage = () => {
  const history = useHistory();
  const [{ diseases }, dispatch] = useStateValue();

  const goToDisease = (id) => {
    history.push(`/disease/${id}`);
  };
  useEffect(() => {
    getDiseases(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SimpleLayout title="Diseases">
      <div className="HomeLayout ">
        <div>
          <h1>Diseases Section</h1>
          <p>
            Table showing available diseases and total number on infections for
            all for a period of one year
          </p>
          <TableContainer className="SmallTable">
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="WhiteBackground"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Total infections</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {diseases.map((disease) => (
                  <TableRow
                    key={disease.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                    className="HospiTableRow"
                    onClick={() => goToDisease(disease.id)}
                  >
                    <TableCell component="th" scope="row">
                      {disease.name}
                    </TableCell>
                    <TableCell align="right">
                      {disease.total_of_patients}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h2>Diseases Graph summary</h2>
          <p>
            Graphs showing summary of diseases infections for all diseases over
            a period of one year
          </p>
          <div className="DiseaseGraphsSection CardSection">
            {diseases.map((disease) => (
              <DiseaseGraph disease={disease} />
            ))}
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default DiseasePage;
