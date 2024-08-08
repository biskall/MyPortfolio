import React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from "@mui/material";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const theme = createTheme({
  // You can customize your theme here
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
