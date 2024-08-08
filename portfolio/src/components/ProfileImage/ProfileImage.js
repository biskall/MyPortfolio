import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

function ProfilePicture() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar
        src="/profile-picture.jpg"
        alt="Your Name"
        sx={{ width: { xs: 100, sm: 150 }, height: { xs: 100, sm: 150 }, mb: 2 }}
      />
      <Typography variant="h6" gutterBottom>
        Your Name
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Full Stack Developer
      </Typography>
    </Box>
  );
}

export default ProfilePicture;