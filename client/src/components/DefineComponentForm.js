import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { StoreProvider, useStoreContext } from "../utils/GlobalState";
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

function DefineComponentForm(props) {
  const nameRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();
  const { register, handleSubmit } = useForm();
  const [state, dispatch] = useStoreContext(ADD_COMPONENT);
  const onSubmit = (data) => {
    console.log(data);
    // props.history.push("./linkcomponent");
  };

  return (
    <div>
      <h1>Define a new component</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input required ref={nameRef} placeholder="Name" />
        <Input required ref={typeRef} placeholder="Type" />
        <Input ref={descriptionRef} placeholder="Description" />
        <button disabled={state.loading} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DefineComponentForm;

// the multi form version is below

// import React from "react";
// import { useForm } from "react-hook-form";
// import { withRouter } from "react-router-dom";
// import { useStateMachine } from "little-state-machine";
// import updateAction from "./updateAction";

// const Step1 = props => {
//   const { register, handleSubmit } = useForm();
//   const { action } = useStateMachine(updateAction);
//   const onSubmit = data => {
//     action(data);
//     props.history.push("./step2");
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input name="firstName" ref={register} />
//       <input name="lastName" ref={register} />
//       <input type="submit" />
//     </form>
//   );
// };

// export default withRouter(Step1);
