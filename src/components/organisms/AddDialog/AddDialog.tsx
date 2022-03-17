import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Dialog, DialogTitle, Slide, Box } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Close } from "@mui/icons-material";
import { closeAddDialog } from "../../../features/AddDialogSlice";
import DialogForm from "../../molecules/DialogForm/DialogForm";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const open = useSelector((state: RootState) => state.setOpen.open);
  const set = useSelector((state: RootState) => state.setOpen.set);
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(closeAddDialog());
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseClick}
      aria-describedby="alert-dialog-slide-description"
      scroll="body"
    >
      <Box>
        <DialogTitle>{`${set} Todo`}</DialogTitle>
        <div
          onClick={handleCloseClick}
          style={{
            cursor: "pointer",
            color: "inherit",
            position: "absolute",
            right: 20,
            top: 20,
          }}
        >
          <Close fontSize="small" />
        </div>
      </Box>
      <DialogForm />
    </Dialog>
  );
}
