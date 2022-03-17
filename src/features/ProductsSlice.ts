import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

type product = {
  id: string;
  title: string;
  description: string;
  date: string;
};

type AddAction = {
  title: string;
  description: string;
};

type EditAction = {
  id: string;
  newTitle: string;
  newDescription: string;
};

const initialState = [] as product[];

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<AddAction>) => {
      state.push({
        id: uuid(),
        date: new Date().toLocaleDateString("en-US"),
        ...action.payload,
      });
    },
    editProduct: (state, action: PayloadAction<EditAction>) => {
      const { id, newTitle, newDescription } = action.payload;
      const index = state.findIndex((s) => s.id === id);
      state[index] = {
        id: state[index].id,
        title: newTitle,
        description: newDescription,
        date: new Date().toLocaleDateString("en-US"),
      };
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.splice(
        state.findIndex((s) => s.id === id),
        1
      );
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = ProductsSlice.actions;

export default ProductsSlice.reducer;
