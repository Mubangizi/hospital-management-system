import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { API, getDiseases } from "../../utils";
import DefaultBarGraph from "../../components/Graphs";
import { useEffect } from "react";
import DiseaseGraph from "../../components/Graphs/DiseaseGraph";
import { useStateValue } from "../../StateProvider";
import { SimpleLayout } from "../../components/Layout";

const SingleHospitalPage = (props) => {
  const [hospital, setHospital] = React.useState({});
  const hospitalId = props.location.pathname.split("/")[2];
  const [{ diseases }, dispatch] = useStateValue();

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
    if (diseases.length === 0) {
      getDiseases(dispatch);
    }
    // getInfections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SimpleLayout title={hospital?.alias}>
      <div className="HomeLayout">
        <div>
          <h1>{hospital?.name}</h1>
          <div>
            Location: <span>{hospital?.district}</span>
          </div>
          <DefaultBarGraph hospitalId={hospitalId} />
        </div>
        <div>
          <h2>Overall Infections per disease in {hospital?.name}</h2>
          <p>
            The table below shows the total number of infections per disease
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
                  <TableCell align="left">No of infections&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(hospital).length !== 0 &&
                  hospital?.diseases.map((disease) => (
                    <TableRow
                      key={disease.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      className="HospiTableRow"
                      // onClick={() => gotToHosipital(hospital.id)}
                    >
                      <TableCell component="th" scope="row">
                        {disease.name}
                      </TableCell>
                      <TableCell align="left">
                        {disease.no_of_infections}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h2>Overall Infections per disease</h2>
          <p>
            These are graphs showing the number of infections per disease for
            the period of one year
          </p>
          <div className="DiseaseGraphsSection">
            {diseases.map((disease) => (
              <DiseaseGraph disease={disease} hospital_id={hospital.id} bar />
            ))}
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default SingleHospitalPage;
