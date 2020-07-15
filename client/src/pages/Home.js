import React from "react";
import { CssBaseline, Container, Typography } from "@material-ui/core";

function HomePage() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          // style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          This just needs a big logo
        </Typography>
      </Container>
    </>
  );
}

export default HomePage;
