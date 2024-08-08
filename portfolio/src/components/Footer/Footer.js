import React from "react";
import { Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.paper", py: { xs: 3, sm: 6 } }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
