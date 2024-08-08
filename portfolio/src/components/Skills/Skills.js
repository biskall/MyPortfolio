import React from 'react';
import { Typography, Box, Chip, Paper } from '@mui/material';

function Skills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'HTML', 'CSS'];

  return (
    <Box
      id="skills"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 3 }, maxWidth: '80%' }}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} color="primary" variant="outlined" sx={{ m: 0.5 }} />
          ))}
        </Box>
      </Paper>
    </Box>
  );
}

export default Skills;