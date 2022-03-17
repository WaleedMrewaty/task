import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../features/ProductsSlice";
import DeleteDialogReducer from "../features/DeleteDialogSlice";
import AddDialogReducer from "../features/AddDialogSlice";
import CurrentProductReducer from "../features/CurrentProductSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    deleteOpen: DeleteDialogReducer,
    setOpen: AddDialogReducer,
    currentProduct: CurrentProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
