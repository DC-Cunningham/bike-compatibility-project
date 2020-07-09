import React, { useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_COMPONENT, LOADING } from "../utils/actions";
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

function SubmitComponentForm() {
  const nameRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveComponent({
      name: nameRef.current.value,
      type: typeRef.current.value,
      description: descriptionRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_COMPONENT,
          post: result.data,
        });
      })
      .catch((err) => console.log(err));

    nameRef.current.value = "";
    typeRef.current.value = "";
  };

  return (
    <div>
      <h1>Create a new component</h1>
      <form onSubmit={handleSubmit}>
        <Input required ref={nameRef} placeholder="Name" />
        <Input required ref={typeRef} placeholder="Type" />
        <Input ref={descriptionRef} placeholder="Description" />
        <button disabled={state.loading} type="submit">
          Save Component
        </button>
      </form>
    </div>
  );
}

export default SubmitComponentForm;

// Step 3: Make your final submission with all the data in the store or display the resulting data.

// import React from "react";
// import { useStateMachine } from "little-state-machine";
// import updateAction from "./updateAction";

// const Step1 = props => {
//   const { state } = useStateMachine(updateAction);

//   return <pre>{JSON.stringify(state, null, 2)}</pre>;
// };
