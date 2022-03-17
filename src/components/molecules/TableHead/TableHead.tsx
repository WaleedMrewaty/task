import { TableCell, TableHead, TableRow } from "@mui/material";

const MyTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell align="right">title</TableCell>
        <TableCell align="right">Description</TableCell>
        <TableCell align="right">CreateAt</TableCell>
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default MyTableHead;
