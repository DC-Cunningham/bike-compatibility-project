import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import MenuContext from "material-ui-shell/lib/providers/Menu/Context";
import { makeStyles, Paper } from "@material-ui/core/";
import Page from "material-ui-shell/lib/containers/Page/Page";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import Search from "../components/Search";
import { UPDATE_COMPONENTS } from "../utils/actions";
import ComponentList from "../components/ComponentList";
import { useStoreContext } from "../utils/GlobalState";

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

function Components() {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    items: [],
    currentItem: {},
  });

  useEffect(() => {
    API.getComponents()
      .then((res) => setFormState({ items: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Page pageTitle="Search the component database">
      <Scrollbar
        style={{ height: "100%", width: "100%", display: "flex", flex: 1 }}
      >
        <Paper className={classes.paper} elevation={6}>
          <Search items={formState.items}></Search>
        </Paper>
      </Scrollbar>
    </Page>
  );
}

export default Components;
