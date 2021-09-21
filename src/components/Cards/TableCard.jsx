import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const TableCard = () => {
  const rows = [
    { name: "Admissions", patients_no: 10, doctors_no: 10, nurses_no: 12 },
    { name: "Cardiology", patients_no: 10, doctors_no: 10, nurses_no: 12 },
    { name: "Anesthetics", patients_no: 10, doctors_no: 10, nurses_no: 12 },
    { name: "Burn Center", patients_no: 10, doctors_no: 10, nurses_no: 12 },
    { name: "Critical Care", patients_no: 10, doctors_no: 10, nurses_no: 12 },
    { name: "General Surgery", patients_no: 10, doctors_no: 10, nurses_no: 12 },
    { name: "Gynecology", patients_no: 10, doctors_no: 10, nurses_no: 12 },
  ];
  return (
    <div className="TableCard Card">
      <h2 className="TableCardTitle">Departments</h2>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Number of Patients</TableCell>
              <TableCell>Number of Doctors</TableCell>
              <TableCell>Number of nurses</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.patients_no}</TableCell>
                <TableCell>{row.doctors_no}</TableCell>
                <TableCell>{row.nurses_no}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableCard;
