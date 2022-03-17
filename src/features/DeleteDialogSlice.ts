import { createSlice } from "@reduxjs/toolkit";

type openType = {
  open: boolean;
};

const initialState: openType = { open: false };

export const DeleteDialogSlice = createSlice({
  name: "deleteDialog",
  initialState,
  reducers: {
    openDeleteDialog: (state) => {
      state.open = true;
    },
    closeDeleteDialog: (state) => {
      state.open = false;
    },
  },
});

export const { openDeleteDialog, closeDeleteDialog } =
  DeleteDialogSlice.actions;

export default DeleteDialogSlice.reducer;
