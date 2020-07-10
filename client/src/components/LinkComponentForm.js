import React, { useRef, useState } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_COMPONENT, LOADING } from "../utils/actions";
import API from "../utils/API";
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

function LinkComponentForm(props) {
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <h1>
        Which components does {state.currentComponent.name} physically touch?
      </h1>
      <button onClick={handleSubmit}>Button</button>
    </div>
  );
}

export default LinkComponentForm;
