import React from "react";
import { Box, Link, SvgIcon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";

function SocialLinks() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 3, pt: 2 }}>
      <Link
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener"
      >
        <SvgIcon component={LinkedInIcon} />
      </Link>
      <Link
        href="https://github.com/your-github-username"
        target="_blank"
        rel="noopener"
      >
        <SvgIcon component={GitHubIcon} />
      </Link>
      <Link
        href="https://www.facebook.com/your-profile"
        target="_blank"
        rel="noopener"
      >
        <SvgIcon component={FacebookIcon} />
      </Link>
      <Link href="mailto:your-email@example.com">
        <SvgIcon component={MailIcon} />
      </Link>
    </Box>
  );
}

export default SocialLinks;
