import { useHistory } from "react-router-dom";
import { saveAuthorisation, isAuthorised } from "../utils/auth";
import Page from "material-ui-shell/lib/containers/Page/Page";
import React, { useState, useContext } from "react";
import {
  TextField,
  Typography,
  Button,
  Paper,
  makeStyles,
} from "@material-ui/core/";
import API from "../utils/API";
import MenuContext from "material-ui-shell/lib/providers/Menu/Context";

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

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const { setAuthMenuOpen } = useContext(MenuContext);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(password);
    if (password === passwordVal) {
      authenticate({
        displayName: name,
        email: email,
        password: password,
        role: "user",
      });
    } else {
      return console.log("Passwords do not match");
    }
  }

  const authenticate = (user) => {
    saveAuthorisation(user);
    let _location = history.location;
    let isAuth = isAuthorised();
    setAuthMenuOpen(false);
    API.registerAPI(user);
    if (isAuth) {
      let _route = "/home";
      if (_location.state && _location.state.from) {
        _route = _location.state.from.pathname;

        history.push(_route);
      } else {
        history.push(_route);
      }
    }
  };

  return (
    <Page
      pageTitle=" Sign up"
      onBackClick={() => {
        history.goBack();
      }}
    >
      <Paper className={classes.paper} elevation={6}>
        <div className={classes.container}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
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
            <Button
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
    </Page>
  );
};

export default SignUp;
