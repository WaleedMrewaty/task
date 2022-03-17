import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { TableBody, TableCell, TableRow } from "@mui/material";
import ActionIcons from "../ActionIcons/ActionIcons";

const MyTableBody = () => {
  const products = useSelector((state: RootState) => state.products);

  return (
    <TableBody>
      {products.map((product) => (
        <TableRow
          key={product.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {product.id}
          </TableCell>
          <TableCell align="right">{product.title}</TableCell>
          <TableCell align="right">{product.description}</TableCell>
          <TableCell align="right">{product.date}</TableCell>
          <TableCell align="right">
            <ActionIcons
              id={product.id}
              title={product.title}
              description={product.description}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default MyTableBody;
