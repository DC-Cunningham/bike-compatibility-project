import React, { useRef, useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import MenuContext from "material-ui-shell/lib/providers/Menu/Context";
import {
  UPDATE_COMPONENTS,
  SET_CURRENT_COMPONENT,
  LOADING,
} from "../utils/actions";
import API from "../utils/API";
import {
  Input,
  InputLabel,
  MenuItem,
  TextField,
  Select,
  ButtonGroup,
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

function EditComponentForm(props) {
  const history = useHistory();
  const classes = useStyles();
  const { setAuthMenuOpen } = useContext(MenuContext);
  const [state, dispatch] = useStoreContext();
  // Setting our component's initial state
  const [components, setComponents] = useState({});
  const [componentTypes, setComponentTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState(false);
  const [filteredComponents, setFilteredComponents] = useState(false);

  // Load all components and store them with setComponents
  useEffect(() => {
    API.getComponents()
      .then((res) =>
        dispatch({ type: UPDATE_COMPONENTS, components: res.data })
      )
      .catch((err) => console.log(err));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(nameRef.current.value);
    // console.log(typeRef.current.value);
    // dispatch({ type: LOADING });
    // await API.saveComponent({
    //   name: nameRef.current.value,
    //   type: typeRef.current.value,
    //   description: descriptionRef.current.value,
    // })
    //   .then((result) => {
    //     console.log(result);
    //     dispatch({
    //       type: SET_CURRENT_COMPONENT,
    //       component: result.data.data.component,
    //     });
    //   })
    //   .catch((err) => console.log(err));
    props.history.push("/linkPOC");
    // props.history.push(props.nextPage);
  };
  const handleLinking = (component) => {
    console.log(component);
    const payload = {
      ...state.currentComponent,
      [props.relationship]: state.currentComponent[props.relationship].concat(
        component._id
      ),
    };
    dispatch({ type: SET_CURRENT_COMPONENT, component: payload });
  };

  const generateButtons = () => {
    return state.components.length ? (
      state.components.map((component) => {
        if (component._id === state.currentComponent._id) {
          return <></>;
        }
        return (
          <Button onClick={() => handleLinking(component)}>
            {component.name}
          </Button>
        );
      })
    ) : (
      <p> there are no components available</p>
    );
  };

  return (
    <div>
      <h1>Define a new component</h1>
      <Sorting
        onSearch={handleSearch}
        searchTerm={searchTerm}
        handleSortByName={handleSortByName}
        handleSortByType={handleSortByType}
        showAllComponents={showAllComponents}
      ></Sorting>
      {/* <ComponentList components={filteredComponents} /> */}
      <ButtonGroup variant="contained" color="primary">
        {generateButtons()}
      </ButtonGroup>
    </div>
  );
}

export default EditComponentForm;
