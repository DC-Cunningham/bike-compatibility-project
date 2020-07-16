import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Typography,
  CssBaseline,
  Container,
  Box,
  makeStyles,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useStoreContext } from "../utils/UserState";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { LOGIN_ACTION } from "../utils/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(620 + theme.spacing(6))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
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
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: `${theme.spacing(8)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
    [theme.breakpoints.down(620)]: {
      width: "auto",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useStoreContext();

  function handleSubmit(event) {
    event.preventDefault();
    authenticate({
      email: email,
      password: password,
    });
  }

  const authenticate = async (user) => {
    try {
      const { data } = await API.loginAPI({
        email: email,
        password: password,
      });
      console.log(data.data);
      const currentUser = {
        displayName: data.data.user.name,
        role: data.data.user.role,
        token: data.data.token,
      };
      localStorage.setItem("User_Token", data.data.token);
      dispatch({ type: LOGIN_ACTION, currentUser });
      history.push("/");
    } catch (e) {
      console.log(e); // TODO: Fix this
    }
  };

  return (
    <>
      <CssBaseline />
      <Box>
        <Container maxWidth="md">
          <Paper className={classes.paper} elevation={6}>
            <div className={classes.container}>
              <Typography align="center" variant="h3">
                Sign In
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <TextField
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-Mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
              </form>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "60%",
                  justifyContent: "space-between",
                }}
              >
                <Link to="/password_reset">Forgot Password?</Link>
                <Link to="/signup">Register</Link>
              </div>
            </div>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default SignIn;
