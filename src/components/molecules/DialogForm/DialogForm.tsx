import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import { Box, TextField, Button } from "@mui/material";
import { addProduct, editProduct } from "../../../features/ProductsSlice";
import { closeAddDialog } from "../../../features/AddDialogSlice";

const DialogForm = () => {
  const currentProduct = useSelector(
    (state: RootState) => state.currentProduct
  );
  const set = useSelector((state: RootState) => state.setOpen.set);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleAddClick = () => {
    const product = { title, description };
    dispatch(addProduct(product));
    dispatch(closeAddDialog());
    setTitle("");
    setDescription("");
  };

  const handleEditClick = () => {
    const id = currentProduct.id;
    const newTitle = title;
    const newDescription = description;
    dispatch(editProduct({ id, newTitle, newDescription }));
    dispatch(closeAddDialog());
    setTitle("");
    setDescription("");
  };

  return (
    <Box mx={3}>
      <TextField
        label="Title"
        type="text"
        fullWidth
        sx={{ marginBottom: 2 }}
        required
        value={title}
        onChange={(e) => handleTitleChange(e)}
      />
      <TextField
        label="Description"
        type="text"
        multiline
        rows={4}
        fullWidth
        required
        value={description}
        onChange={(e) => handleDescriptionChange(e)}
      />
      <Button
        onClick={set === "Add" ? handleAddClick : handleEditClick}
        variant="outlined"
        sx={{ marginY: 2, float: "right" }}
        disabled={title === "" || description === "" ? true : false}
      >
        {set} Todo
      </Button>
    </Box>
  );
};

export default DialogForm;
