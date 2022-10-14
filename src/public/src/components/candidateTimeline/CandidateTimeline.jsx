import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Status from "./internal/Status";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  TableRow: {
    padding: "10 0",
    width: "150px"
  }
});

const CandidateTimeline = () => {
  const classes = useStyles();

  return (
    <TableRow className={classes.TableRow}>
      <TableCell className={classes.TableRow} component="th" scope="row">
        test
      </TableCell>
      <TableCell className={classes.TableRow} align="center">
        <Status />
      </TableCell>
      <TableCell className={classes.TableRow} align="center">
        <Status />
      </TableCell>
      <TableCell className={classes.TableRow} align="center">
        <Status />
      </TableCell>
      <TableCell className={classes.TableRow} align="center">
        <Status />
      </TableCell>
      <TableCell className={classes.TableRow} align="center"></TableCell>
      <TableCell className={classes.TableRow} align="center"></TableCell>
    </TableRow>
  );
};

export default CandidateTimeline;
