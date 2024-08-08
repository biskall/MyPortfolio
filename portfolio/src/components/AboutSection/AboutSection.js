import React from "react";
import { Typography, Grid } from "@mui/material";

function AboutSection() {
  return (
    <Grid item>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        I'm a full stack developer passionate about creating efficient and
        user-friendly web applications. With expertise in a wide range of
        technologies, I enjoy tackling complex challenges and delivering
        high-quality solutions.
      </Typography>
      <Typography variant="body1" gutterBottom>
        My journey in the world of web development has been filled with
        continuous learning and growth. I'm constantly exploring new tools
        and techniques to enhance my skills and stay ahead of the curve.
      </Typography>
    </Grid>
  );
}

export default AboutSection;