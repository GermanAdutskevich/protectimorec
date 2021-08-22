import Header from "../components/header/header";
import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    marginTop: 64,
    minWidth: 700,
  },
});

function List() {
  const [list, setList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:8000/list")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);
  return (
    <>
      <Header />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell>Adress</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <StyledTableRow key={row.firstname}>
                <StyledTableCell component="th" align="center" scope="row">
                  {row.firstname}
                </StyledTableCell>
                <StyledTableCell align="left">{row.lastname}</StyledTableCell>
                <StyledTableCell>{row.adress}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );

  //   fetch get
}

export default List;
