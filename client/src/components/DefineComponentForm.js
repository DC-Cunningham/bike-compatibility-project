import React, { useRef, useState } from "react";
import { useStoreContext } from "../utils/GlobalState";
import {
  ADD_COMPONENT,
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
  Button,
  List,
  ListItem,
  makeStyles,
  Paper,
  FormHelperText,
  FormControl,
} from "@material-ui/core/";

function DefineComponentForm(props) {
  const nameRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    API.saveComponent({
      name: nameRef.current.value,
      type: typeRef.current.value,
      description: descriptionRef.current.value,
    })
      .then((result) => {
        console.log(result);
        props.setFormState(result.data.data.component);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Define a new component</h1>
      <form onSubmit={handleSubmit}>
        <Input
          inputRef={nameRef}
          placeholder="Name"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <Input
          inputRef={typeRef}
          placeholder="Type"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <Input
          inputRef={descriptionRef}
          placeholder="Description"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button
          disabled={state.loading}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default DefineComponentForm;
