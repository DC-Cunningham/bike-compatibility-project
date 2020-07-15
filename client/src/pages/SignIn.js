import { useHistory } from "react-router-dom";
import { saveAuthorisation, isAuthorised } from "../utils/auth";
import React, { useState, useContext } from "react";
import {
  TextField,
  Typography,
  CssBaseline,
  Container,
  makeStyles,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// import MenuContext from "material-ui-shell/lib/providers/Menu/Context";
import { Link } from "react-router-dom";
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    marginLeft: theme.spacing(3),
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
  avatar: {
    margin: theme.spacing(1),
    width: 192,
    height: 192,
    color: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
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
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { setAuthMenuOpen } = useContext(MenuContext);

  function handleSubmit(event) {
    event.preventDefault();
    authenticate({
      email: email,
      password: password,
    });
  }

  const authenticate = async (user) => {
    await API.loginAPI({
      email: email,
      password: password,
    });
    const _location = history.location;
    const isAuth = isAuthorised();
    if (isAuth) {
      let _route = "/about";
      if (_location.state && _location.state.from) {
        _route = _location.state.from.pathname;
        history.push(_route);
      } else {
        history.push(_route);
      }
    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper>
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
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Link to="/password_reset">Forgot Password?</Link>
              <Link to="/signup">Register</Link>
            </div>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default SignIn;
