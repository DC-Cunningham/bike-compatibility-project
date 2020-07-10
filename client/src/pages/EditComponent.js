import React from "react";
import { makeStyles, Paper } from "@material-ui/core/";
import Page from "material-ui-shell/lib/containers/Page/Page";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import EditComponentForm from "../components/EditComponentForm";
import LinkComponentForm from "../components/LinkComponentForm";
import SubmitComponentForm from "../components/SubmitComponentForm";
import { BrowserRouter as Router, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(620 + theme.spacing(6))]: {
      width: "90%",
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

function EditComponents(props) {
  const classes = useStyles();
  return (
    <Page pageTitle="Edit a component">
      <Scrollbar
        style={{ height: "100%", width: "100%", display: "flex", flex: 1 }}
      >
        <Paper className={classes.paper} elevation={6}>
          <Router>
            <Route exact path="/editcomponent" component={EditComponentForm} />
            <Route
              path="/linkPOC"
              component={() => (
                <LinkComponentForm
                  relationship="pointsOfContact"
                  nextPage="/linkinfluencer"
                />
              )}
            />
            <Route
              path="/linkinfluencer"
              component={() => (
                <LinkComponentForm
                  relationship="influencers"
                  nextPage="/submitcomponent"
                />
              )}
            />
            <Route path="/submitcomponent" component={SubmitComponentForm} />
          </Router>
        </Paper>
      </Scrollbar>
    </Page>
  );
}

export default EditComponents;
