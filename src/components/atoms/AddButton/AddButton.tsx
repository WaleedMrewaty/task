import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { openAddDialog, addString } from "../../../features/AddDialogSlice";

const AddButton = () => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addString());
    dispatch(openAddDialog());
  };

  return (
    <Button variant="outlined" onClick={handleAddClick}>
      ADD TODO
    </Button>
  );
};

export default AddButton;
