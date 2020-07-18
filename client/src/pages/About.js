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
  body: {
    padding: theme.spacing(4),
    [theme.breakpoints.down(960)]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down(620)]: {
      padding: theme.spacing(0),
      paddingTop: theme.spacing(2),
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
            <Typography variant="body" className={classes.body}>
              The Bike Compatiility Project deals with the intricate
              compatibility relationships of bicycle components. It hopes to
              make a user friendly database of component information for
              individuals in the bicycle industry as well as enthusiasts.
              <br />
              <br />
              It shows which other components can come into contact with, and
              also which other components can influence any individual
              component. By having a quick at hand reference less repair,
              replacement or customisation issues will result from not
              considering all possible compatibility issues.
            </Typography>
          </Paper>
          <Paper className={classes.paper} elevation={6}>
            <Typography className={classes.type} variant="h4">
              Why does the project exist?
            </Typography>
            <Typography variant="body1" className={classes.body}>
              After spending over 25 years maintaining bicycles I have accrued
              significant experience with bike component compatibility. Mostly
              through hands on experience and learning the hard way when things
              have not worked out due to part incompatibility.
              <br />A reference site to quickly find out all the considerations
              means less mistakes in getting the right parts. This in turn means
              less cost to a workshop, retail store and in the end the bicycle
              owner.
            </Typography>
          </Paper>
          <Paper className={classes.paper} elevation={6}>
            <Typography className={classes.type} variant="h4">
              Who is the project for?
            </Typography>
            <Typography variant="body1" className={classes.body}>
              This project is targeted to all the mechanics in workshops around
              the world. Whether they be highly experienced or not the resource
              is intended to make all users more efficient in their decisions
              related to compatibility of parts.
            </Typography>
          </Paper>
          <Paper className={classes.paper} elevation={6}>
            <Typography className={classes.type} variant="h4">
              Definitions:
            </Typography>
            <Typography className={classes.type} variant="h5">
              Point of Contact
            </Typography>
            <Typography variant="body1" className={classes.body}>
              For the scope of this project a "point of contact" refers to any
              component that has any contact with another whilst static. As a
              comparative example; a front derailleur has a point of contact
              with a frame yet does not have a point of contact with a chain.
            </Typography>
            <Typography className={classes.type} variant="h5">
              Influencers
            </Typography>
            <Typography variant="body1" className={classes.body}>
              For the scope of this project an "influencer" is any component
              that, even though it may not ever contact another component,
              influences whether it is going to be compatible with the bike as a
              whole. As an example, a shifter is an influencer of the derailleur
              it works with yet never comes into contact with.
            </Typography>
            <br />
            <br />
            <br />
          </Paper>
          <br />
          <br />
          <br />
        </Container>
        <br />
        <br />
        <br />
      </Box>
    </>
  );
}

export default About;
