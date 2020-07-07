import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { saveAuthorisation, isAuthorised } from "../utils/auth";
import MenuContext from "material-ui-shell/lib/providers/Menu/Context";
import {
  Input,
  TextField,
  Select,
  Button,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core/";
import Page from "material-ui-shell/lib/containers/Page/Page";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(620 + theme.spacing(6))]: {
      // width: 400,
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

function AddComponent() {
  const classes = useStyles();
  const intl = useIntl();
  const history = useHistory();
  const { setAuthMenuOpen } = useContext(MenuContext);
  // Setting our component's initial state
  const [components, setComponents] = useState([]);
  const [formObject, setFormObject] = useState({});

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

  // Deletes a component from the database with a given id, then reloads components from the db
  function deleteComponent(id) {
    API.deleteComponent(id)
      .then((res) => loadComponents())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.savecomponent method to save the component data
  // Then reload components from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.type && formObject.manufacturerSKU) {
      API.saveComponent({
        name: formObject.name,
        type: formObject.type,
        manufacturerSKU: formObject.manufacturerSKU,
        description: formObject.description,
      })
        .then((res) => loadComponents())
        .catch((err) => console.log(err));
    }
  }

  return (
    <Page pageTitle={intl.formatMessage({ id: "components" })}>
      <Paper className={classes.paper} elevation={6}>
        <div className={classes.container}>
          <h1>Do you have a component that you would like to add?</h1>
          <form className={classes.form}>
            <Input
              onChange={handleInputChange}
              name="name"
              placeholder="Name of Component to add"
            />
            {/* <Input
              onChange={handleInputChange}
              name="type"
              placeholder="Component Type (required)"
            /> */}
            <Select
              onChange={handleInputChange}
              name="type"
              placeholder="Component Type (required)"
            />
            <TextField
              onChange={handleInputChange}
              name="description"
              placeholder="Description (Optional)"
            />
            <Button
              disabled={!(formObject.name && formObject.type)}
              onClick={handleFormSubmit}
            >
              Submit Component
            </Button>
          </form>
          <h1>Saved Components</h1>
          {components.length ? (
            <List>
              {components.map((component) => (
                <ListItem key={component._id}>
                  <Link to={"/components/" + component._id}>
                    <strong>
                      {component.name} in {component.type}
                    </strong>
                  </Link>
                  <Button onClick={() => deleteComponent(component._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </Paper>
    </Page>
  );
}

export default AddComponent;
