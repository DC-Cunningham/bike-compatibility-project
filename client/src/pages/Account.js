import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Paper,
  makeStyles,
} from "@material-ui/core/";
import { useStoreContext } from "../utils/UserState";

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
      padding: `${theme.spacing(1)}px ${theme.spacing(0)}px ${theme.spacing(
        0
      )}px`,
    },
  },
  type: {
    [theme.breakpoints.down(960)]: {
      fontSize: theme.spacing(3),
    },
  },
}));

const Account = () => {
  const classes = useStyles();
  const [state, dispatch] = useStoreContext();

  return (
    <>
      <CssBaseline />
      <Box>
        <Container maxWidth="md">
          <Paper className={classes.paper} elevation={6}>
            <div className={classes.container}>
              <Typography variant="h3">Account Details</Typography>
              <br />
              <Typography align="center" variant="h5">
                Thanks for joining up to The Bike compatibility Project. Your
                details supplied are as follows:
              </Typography>
              <br />
              <Typography variant="h5">Username:</Typography>
              <Typography variant="h4">{state.user.displayName}</Typography>
              <br />
              <Typography variant="h5">Email:</Typography>
              <Typography variant="h4">{state.user.email}</Typography>

              <br />
              <Typography variant="h5">
                You are currently logged in with a {state.user.role} level role.
              </Typography>
              <br />
            </div>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Account;
