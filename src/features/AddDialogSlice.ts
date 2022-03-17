import { createSlice } from "@reduxjs/toolkit";

type openType = {
  open: boolean;
  set: string;
};

const initialState: openType = { open: false, set: "" };

export const AddDialogSlice = createSlice({
  name: "addDialog",
  initialState,
  reducers: {
    openAddDialog: (state) => {
      state.open = true;
    },
    closeAddDialog: (state) => {
      state.open = false;
    },
    addString: (state) => {
      state.set = "Add";
    },
    editString: (state) => {
      state.set = "Edit";
    },
  },
});

export const { openAddDialog, closeAddDialog, addString, editString } =
  AddDialogSlice.actions;

export default AddDialogSlice.reducer;
