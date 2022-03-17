import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type currentProduct = {
  id: string;
  title: string;
  description: string;
};

const initialState: currentProduct = { id: "", title: "", description: "" };

export const CurrentProductSlice = createSlice({
  name: "currentProduct",
  initialState,
  reducers: {
    setCurrentProduct: (state, action: PayloadAction<currentProduct>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
  },
});

export const { setCurrentProduct } = CurrentProductSlice.actions;

export default CurrentProductSlice.reducer;
