import React from 'react';
import { Typography, Box, TextField, Button, Paper, Grid, Link, SvgIcon } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 }, maxWidth: '80%', width: '100%' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Contact Me
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label="Name" variant="outlined" required fullWidth />
              <TextField label="Email" variant="outlined" type="email" required fullWidth />
              <TextField label="Message" variant="outlined" multiline rows={4} required fullWidth />
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Send
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Find me on:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
              <Link href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener">
                <SvgIcon component={LinkedInIcon} />
              </Link>
              <Link href="https://github.com/your-github-username" target="_blank" rel="noopener">
                <SvgIcon component={GitHubIcon} />
              </Link>
              <Link href="https://www.facebook.com/your-profile" target="_blank" rel="noopener">
                <SvgIcon component={FacebookIcon} />
              </Link>
              <Link href="mailto:your-email@example.com">
                <SvgIcon component={MailIcon} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Contact;