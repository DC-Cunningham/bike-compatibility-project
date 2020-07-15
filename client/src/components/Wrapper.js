import React from "react";
import {
  CssBaseline,
  Container,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //   paper: {
  //     width: "auto",
  //     marginLeft: theme.spacing(3),
  //     marginRight: theme.spacing(3),
  //     [theme.breakpoints.up(620 + theme.spacing(6))]: {
  //       width: "90%",
  //       marginLeft: "auto",
  //       marginRight: "auto",
  //     },
  //     marginTop: theme.spacing(8),
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
  //       3
  //     )}px`,
  //   },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     width: 192,
  //     height: 192,
  //     color: theme.palette.secondary.main,
  //   },
  //   form: {
  //     marginTop: theme.spacing(1),
  //   },
  //   submit: {
  //     margin: theme.spacing(3, 0, 2),
  //   },
  //   container: {
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     height: `100%`,
  //   },
}));

function Wrapper() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper></Paper>
      </Container>
    </>
  );
}

export default Wrapper;
