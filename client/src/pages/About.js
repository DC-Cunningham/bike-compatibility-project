import React from "react";
import { CssBaseline, Container, Typography, Paper } from "@material-ui/core";

function About() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper>
          <Typography
            component="div"
            // style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          >
            This is the About Page
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
export default About;
