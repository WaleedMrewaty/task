import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { closeDeleteDialog } from "../../../features/DeleteDialogSlice";
import { deleteProduct } from "../../../features/ProductsSlice";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const open = useSelector((state: RootState) => state.deleteOpen.open);
  const currentId = useSelector((state: RootState) => state.currentProduct.id);
  const dispatch = useDispatch();

  const handleDisagreeClick = () => {
    dispatch(closeDeleteDialog());
  };

  const handleAgreeClick = () => {
    const id = currentId;
    dispatch(deleteProduct(id));
    dispatch(closeDeleteDialog());
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDisagreeClick}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure you want to delete this?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleDisagreeClick}>Disagree</Button>
          <Button onClick={handleAgreeClick}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
