import React from "react";
import { Box, Paper, useTheme, useMediaQuery, Grid } from "@mui/material";
import AboutSection from "../AboutSection/AboutSection";
import ProfilePicture from "../ProfileImage/ProfileImage";
import SocialLinks from "../SocialLinks/SocialLinks";

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const renderContent = () => (
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          width: "80%",
          maxWidth: 1200,
          p: { xs: 2, sm: 4 },
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {!isMobile && <AboutSection />}
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mb: isMobile ? 4 : 0,
              }}
            >
              <ProfilePicture />
              <SocialLinks />
            </Box>
          </Grid>
          {isMobile && (
            <Grid item xs={12}>
              <AboutSection />
            </Grid>
          )}
        </Grid>
      </Paper>
    );

  return (
    <Box
      id="about"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {renderContent()}
    </Box>
  );
}

export default About;
