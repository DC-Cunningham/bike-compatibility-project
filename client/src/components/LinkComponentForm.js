import React, { useRef, useState, useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { useHistory } from "react-router-dom";
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

function LinkComponentForm(props) {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getComponents()
      .then((res) =>
        dispatch({ type: UPDATE_COMPONENTS, components: res.data })
      )
      .catch((err) => console.log(err));
  }, []);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(props.nextPage);
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
    <>
      <h5>
        Please select all components that a {state.currentComponent.name}{" "}
        physically touches?
      </h5>
      <ButtonGroup variant="contained" color="primary">
        {generateButtons()}
      </ButtonGroup>
      <Button onClick={handleSubmit}>Confirm</Button>
    </>
  );
}

export default LinkComponentForm;
