import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { saveAuthorisation, isAuthorised } from "../utils/auth";
import MenuContext from "material-ui-shell/lib/providers/Menu/Context";
import {
  Input,
  InputLabel,
  MenuItem,
  TextField,
  Select,
  Button,
  List,
  ListItem,
  makeStyles,
  Paper,
  FormHelperText,
  FormControl,
} from "@material-ui/core/";
import Page from "material-ui-shell/lib/containers/Page/Page";
import Scrollbar from "material-ui-shell/lib/components/Scrollbar/Scrollbar";
import Sorting from "../components/Sorting";
import ComponentList from "../components/ComponentList";

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
  const history = useHistory();
  const { setAuthMenuOpen } = useContext(MenuContext);
  // Setting our component's initial state
  const [components, setComponents] = useState({});
  const [componentTypes, setComponentTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState(false);
  const [filteredComponents, setFilteredComponents] = useState(false);

  // Load all components and store them with setComponents
  useEffect(() => {
    loadComponents();
  }, []);

  // Loads all components and sets them to components
  function loadComponents() {
    API.getComponents()
      .then((res) => setComponents(res.data))
      .catch((err) => console.log(err));
  }

  // sorts all the components by their name
  function handleSortByName() {
    if (!sorted) {
      setComponents(components.sort((a, b) => (a.name > b.name ? 1 : -1)));
      setSorted(true);
    } else {
      setComponents(components.sort((a, b) => (a.name > b.name ? -1 : 1)));
      setSorted(false);
    }
  }

  function handleSortByType() {
    if (!sorted) {
      setComponents(components.sort((a, b) => (a.type > b.type ? 1 : -1)));
      setSorted(true);
    } else {
      setComponents(components.sort((a, b) => (a.type > b.type ? -1 : 1)));
      setSorted(false);
    }
  }

  function search(type) {
    API.getComponents(`type= ${type}`)
      .then((res) => setComponents(res.data))
      .catch((err) => console.log(err));
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    const filtered = components.filter((component) =>
      component.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(filtered);
    setFilteredComponents(filtered);
  }

  function showAllComponents() {
    setFilteredComponents(components);
  }

  return (
    <Page pageTitle="Search the component database">
      <Scrollbar
        style={{ height: "100%", width: "100%", display: "flex", flex: 1 }}
      >
        <Paper className={classes.paper} elevation={6}>
          <Sorting
            onSearch={handleSearch}
            searchTerm={searchTerm}
            handleSortByName={handleSortByName}
            handleSortByType={handleSortByType}
            showAllComponents={showAllComponents}
          ></Sorting>
          <ComponentList components={filteredComponents} />
        </Paper>
      </Scrollbar>
    </Page>
  );
}

export default Components;
