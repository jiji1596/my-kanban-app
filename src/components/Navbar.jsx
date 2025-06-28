import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const Navbar = ({ handleTheme, isDarkMode }) => {
  return (
    <Box sx={{ flexGrow: 1, mb:3}}>
      <AppBar position="static" sx={{ px: 34 }}>
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            My Kanban
          </Typography>
          {isDarkMode ? (
            <IconButton onClick={() => handleTheme()}>
              <DarkModeIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => handleTheme()}>
              <LightModeIcon sx={{color: "white"}} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
