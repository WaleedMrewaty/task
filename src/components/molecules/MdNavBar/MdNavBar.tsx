import * as React from "react";
import { selections } from "../../../servers/some";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MyLink from "../../atoms/Link/MyLink";

type propsType = {
  anchorElNav: any;
  handleOpenNavMenu: any;
  handleCloseNavMenu: any;
};

const pages = [...selections];

const MdNavBar = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}: propsType) => {
  return (
    <>
      {" "}
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
      >
        LOGO
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <MyLink title={page} styles={{ textDecoration: "none" }} />
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default MdNavBar;
