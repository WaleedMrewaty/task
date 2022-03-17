import { Container, Box } from "@mui/material";
import Table from "../../organisms/Table/Table";
import AddButton from "./../../atoms/AddButton/AddButton";
import SetDialog from "../../organisms/AddDialog/AddDialog";
import DeleteDialog from "../../organisms/DeleteDialog/DeleteDialog";

const Home = () => {
  return (
    <Box m={2}>
      <Container maxWidth="lg">
        <Box mb={1} justifyContent="end" display="flex">
          <AddButton />
        </Box>
        <Table />
        <SetDialog />
        <DeleteDialog />
      </Container>
    </Box>
  );
};

export default Home;
