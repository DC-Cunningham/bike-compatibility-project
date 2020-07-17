import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Button,
  Paper,
  makeStyles,
} from "@material-ui/core/";
import API from "../utils/API";
import { useStoreContext } from "../utils/UserState";
import { LOGIN_ACTION } from "../utils/actions";
import { Alert } from "@material-ui/lab";

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

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [error, setError] = useState("");
  const [state, dispatch] = useStoreContext();

  function handleSubmit(event) {
    event.preventDefault();
    if (password === passwordVal) {
      authenticate({
        name: name,
        email: email,
        password: password,
        role: "user",
      });
    } else {
      setError("Passwords do not match");
    }
  }

  const authenticate = async (user) => {
    try {
      const token = await API.registerAPI(user);
      const currentUser = {
        displayName: user.name,
        role: "user",
        token: token.data.data.token,
      };
      dispatch({ type: LOGIN_ACTION, currentUser });
      history.push("/");
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  return (
    <>
      <CssBaseline />
      <Box>
        <Container maxWidth="md">
          <Paper className={classes.paper} elevation={6}>
            <div className={classes.container}>
              <Typography variant="h3">Sign Up</Typography>
              <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <TextField
                  className={classes.type}
                  value={name}
                  onInput={(e) => setName(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  className={classes.type}
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
                <TextField
                  className={classes.type}
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  className={classes.type}
                  value={passwordVal}
                  onInput={(e) => setPasswordVal(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password_confirm"
                  label="Confirm Password"
                  type="password"
                  id="password_confirm"
                  autoComplete="current-password"
                />
                {error && <Alert severity="error">{error}</Alert>}
                <Button
                  className={classes.type}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Submit
                </Button>
              </form>
            </div>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default SignUp;
