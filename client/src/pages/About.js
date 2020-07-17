import React from "react";
import {
  Box,
  CssBaseline,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(24),
    marginRight: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
    [theme.breakpoints.down(960)]: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(0),
    },
  },
  form: {
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: `100%`,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    padding: `${theme.spacing(8)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
    [theme.breakpoints.down(960)]: {
      width: "auto",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      paddingTop: theme.spacing(1),
    },
  },
}));

function About() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Box>
        <Container maxWidth="md">
          <Paper className={classes.paper} elevation={6}>
            <Typography variant="h4">What is the project?</Typography>
            <Typography variant="body">lorem ipsum dolor sit amet</Typography>
            <Typography variant="h4">Why does the project exist?</Typography>
            <Typography variant="body1">lorem ipsim dolor sit amet</Typography>
            <Typography variant="h4">Who is the project for?</Typography>
            <Typography variant="body1">lorem ipsim dolor sit amet</Typography>
            <br />
            <Typography variant="h4">Definitions:</Typography>
            <Typography variant="h5">Point of Contact</Typography>
            <Typography variant="body1">lorem ipsim dolor sit amet</Typography>
            <Typography variant="h5">Influencers</Typography>
            <Typography variant="body1">lorem ipsim dolor sit amet</Typography>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default About;
