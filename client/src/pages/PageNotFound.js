import React from "react";
import {
  Button,
  Divider,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core/";

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

function PageNotFound() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className={classes.container}>
        <Divider className={classes.divider} light />
        <Typography variant="h5">Sorry</Typography>
        <Typography variant="subtitle1">Page Not Found</Typography>
        <Divider className={classes.divider} light />

        {/* <Button
          color="secondary"
          aria-label="home"
          href="/"
          className={classes.button}
        >
          <Home />
        </Button> */}
      </div>
    </Paper>
  );
}

export default PageNotFound;
