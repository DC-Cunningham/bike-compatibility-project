import React from "react";
import {
  CssBaseline,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(8),
    // flexGrow: 1,
    // position: "fixed",
    // backgroundColor: theme.palette.background.paper,
    // display: "flex",
    // height: "100vh",
  },
  header: {
    backgroundColor: "blue",
    borderRight: `2px solid ${theme.palette.divider}`,
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Typography
          variant="h1"
          // style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          The Bike Compatibility Project
        </Typography> */}
      </Container>
    </div>
  );
}

export default HomePage;
