import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const TableCard = ({
  title = "",
  dataList = [],
  headingList = [],
  link = null,
}) => {
  return (
    <div className="TableCard Card">
      <h2 className="TableCardTitle">{title}</h2>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headingList.length &&
                headingList.map((heading, index) => (
                  <TableCell key={index}>{heading}</TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.length &&
              dataList.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {row.map((cell, index) => (
                    <TableCell key={index}>
                      {link && <Link to={link}>{cell}</Link>}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableCard;
