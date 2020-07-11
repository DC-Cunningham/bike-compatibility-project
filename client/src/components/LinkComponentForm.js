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
  const [selected, setSelected] = useState([]);

  const handleLinking = (item) => {
    const newSelected = selected.concat(item);
    setSelected(newSelected);
  };

  const handleUnlinking = (item) => {
    const unselected = selected.filter(function (obj) {
      return obj._id !== item._id;
    });
    setSelected(unselected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      ...props.currentItem,
      [props.relationship]: props.currentItem[props.relationship].concat(
        selected
      ),
    };
    props.setFormState(item);
  };

  const selectedButtons = () => {
    return selected.length ? (
      selected.map((item) => {
        return (
          <Button onClick={() => handleUnlinking(item)}>{item.name}</Button>
        );
      })
    ) : (
      <p>You have not selected any components yet </p>
    );
  };

  const unselectedButtons = () => {
    console.log(selected);
    return props.items.length ? (
      props.items.map((item) => {
        // if (item._id === props.currentItem._id || selectedArray.includes()) {
        if (
          item._id === props.currentItem._id ||
          selected.some((e) => e._id === item._id)
        ) {
          return <></>;
        }
        return <Button onClick={() => handleLinking(item)}>{item.name}</Button>;
      })
    ) : (
      <p> There are no more components available</p>
    );
  };

  return (
    <>
      <div>
        <h5>
          Please select all components with which a {props.currentItem.name} is{" "}
          {props.name}
        </h5>
      </div>
      <div>
        <ButtonGroup variant="contained" color="primary">
          {unselectedButtons()}
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup variant="contained" color="primary">
          {selectedButtons()}
        </ButtonGroup>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}

export default LinkComponentForm;
