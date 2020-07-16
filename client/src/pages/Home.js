import React from "react";
import {
  Box,
  CssBaseline,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import HomeImage from "../assets/TBCP_Homepage.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(24),
    marginRight: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
    [theme.breakpoints.down(960)]: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(0),
    },
  },
  image: {
    height: 550,
    width: "100%",
    objectFit: "cover",
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

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box>
          <Paper className={classes.paper} elevation={6}>
            <Box>
              <img className={classes.image} src={HomeImage} />
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
