import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Name
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <a href="#about">About</a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="#skills">Skills</a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="#projects">Projects</a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="#contact">Contact</a>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box>
            <Button color="inherit" href="#about">
              About
            </Button>
            <Button color="inherit" href="#skills">
              Skills
            </Button>
            <Button color="inherit" href="#projects">
              Projects
            </Button>
            <Button color="inherit" href="#contact">
              Contact
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
