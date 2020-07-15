import React from "react";
import { CssBaseline, Container, Typography } from "@material-ui/core";

function Account() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          // style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          This an Account Page
        </Typography>
      </Container>
    </>
  );
}

export default Account;
