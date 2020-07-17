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
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
    [theme.breakpoints.down(960)]: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(0),
    },
    [theme.breakpoints.down(620)]: {
      marginLeft: theme.spacing(4),
    },
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
    },
  },
  type: {
    [theme.breakpoints.down(960)]: {
      fontSize: theme.spacing(3),
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
            <Typography className={classes.type} variant="h4">
              What is the project?
            </Typography>
            <Typography variant="body">
              lorem ipsum dolor sit amet
              sdbhlerwfgblbejkfgkjwergflkwherlgfihhbfe werg werg wreg werg ewrg
              erg erg erg erg{" "}
            </Typography>
          </Paper>
          <Paper className={classes.paper} elevation={6}>
            <Typography className={classes.type} variant="h4">
              Why does the project exist?
            </Typography>
            <Typography variant="body1">lorem ipsim dolor sit amet</Typography>
          </Paper>
          <Paper className={classes.paper} elevation={6}>
            <Typography className={classes.type} variant="h4">
              Who is the project for?
            </Typography>
            <Typography variant="body1">lorem ipsim dolor sit amet</Typography>
          </Paper>
          <Paper className={classes.paper} elevation={6}>
            <Typography className={classes.type} variant="h4">
              Definitions:
            </Typography>
            <Typography className={classes.type} variant="h5">
              Point of Contact
            </Typography>
            <Typography variant="body1">lorem ipsim dolor sit amet</Typography>
            <Typography className={classes.type} variant="h5">
              Influencers
            </Typography>
            <Typography variant="body1">lorem ipsim dolor sit amet</Typography>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default About;
