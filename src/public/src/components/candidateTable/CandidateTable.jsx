import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CandidateTimeline from "../candidateTimeline/CandidateTimeline";

const CandidateTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Candidate</TableCell>
            <TableCell align="center">Reffered</TableCell>
            <TableCell align="center">Interviewed</TableCell>
            <TableCell align="center">Hired</TableCell>
            <TableCell align="center">Joined</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Reward</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <CandidateTimeline />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CandidateTable;
