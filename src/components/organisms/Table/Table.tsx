import { Table, TableContainer, Paper } from "@mui/material";
import MyTableBody from "../../molecules/TableBody/TableBody";
import MyTableHead from "./../../molecules/TableHead/TableHead";

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <MyTableHead />
        <MyTableBody />
      </Table>
    </TableContainer>
  );
}
