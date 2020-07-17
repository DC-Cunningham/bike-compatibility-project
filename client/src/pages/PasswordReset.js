import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core/";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(28),
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
      marginLeft: theme.spacing(6),
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

const PasswordReset = () => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    history.replace("/signin");
  }

  return (
    <>
      <CssBaseline />
      <Box>
        <Container maxWidth="md">
          <Paper className={classes.paper} elevation={6}>
            <div className={classes.container}>
              <Typography component="h1" variant="h5">
                Password reset
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit} noValidate>
                <TextField
                  className={classes.type}
                  value={username}
                  onInput={(e) => setUsername(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="E-Mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />

                <Button
                  className={classes.type}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Reset Password
                </Button>
              </form>
            </div>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default PasswordReset;
