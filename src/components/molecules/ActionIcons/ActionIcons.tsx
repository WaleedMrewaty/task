import { useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import { setCurrentProduct } from "../../../features/CurrentProductSlice";
import { openDeleteDialog } from "../../../features/DeleteDialogSlice";
import { openAddDialog, editString } from "../../../features/AddDialogSlice";

type propType = {
  id: string;
  title: string;
  description: string;
};

const iconStyle = { cursor: "pointer", marginLeft: 0.8, opacity: 0.7 };

const ActionIcons = ({ id, title, description }: propType) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    const product = { id: id, title: title, description: description };
    dispatch(setCurrentProduct(product));
    dispatch(openDeleteDialog());
  };

  const handleEditClick = () => {
    const product = { id: id, title: title, description: description };
    dispatch(setCurrentProduct(product));
    dispatch(editString());
    dispatch(openAddDialog());
  };

  return (
    <Box>
      <Visibility sx={iconStyle} fontSize="small" />
      <span onClick={handleEditClick}>
        <Edit sx={iconStyle} fontSize="small" />
      </span>
      <span onClick={handleDeleteClick}>
        <Delete sx={iconStyle} fontSize="small" />
      </span>
    </Box>
  );
};

export default ActionIcons;
