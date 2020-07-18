import React from "react";
import {
  Box,
  Button,
  CssBaseline,
  Container,
  makeStyles,
  Paper,
  Typography,
  Link,
} from "@material-ui/core";
import { useStoreContext } from "../utils/UserState";
import HomeImage from "../assets/TBCP_Homepage_ST.jpg";

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
    [theme.breakpoints.down(620)]: {
      marginLeft: theme.spacing(4),
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
  const [state, dispatch] = useStoreContext();
  console.log(state);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box>
          <Paper className={classes.paper} elevation={6}>
            <Box>
              <img
                className={classes.image}
                src={HomeImage}
                alt="SingleTrack"
              />
              <br />
              <br />
              {state.user.role ? (
                <></>
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  align="center"
                  href="/signin"
                >
                  Please sign in to access the database
                </Button>
              )}
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;
