import * as React from "react";
import { selections } from "../../../servers/some";
import { Box, Typography, IconButton, Avatar, Button } from "@mui/material";
import MyLink from "../../atoms/Link/MyLink";

type propsType = {
  handleCloseNavMenu: () => void;
};
const pages = [...selections];

const SxNavBar = ({ handleCloseNavMenu }: propsType) => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
      >
        LOGO
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <MyLink
              title={page}
              styles={{ color: "white", textDecoration: "none" }}
            />
          </Button>
        ))}
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Box>
    </>
  );
};

export default SxNavBar;
