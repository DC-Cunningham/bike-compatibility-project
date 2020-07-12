import React, { useRef, useState } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import {
  Select,
  FormHelperText,
  MenuItem,
  Button,
  TextField,
} from "@material-ui/core/";

function DefineComponentForm(props) {
  const nameRef = useRef();
  const [type, setType] = useState("");
  const descriptionRef = useRef();

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.saveComponent({
      name: nameRef.current.value,
      type: type,
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
        <TextField
          inputRef={nameRef}
          label="Component Name (required)"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormHelperText>Component Type (required)</FormHelperText>
        <Select
          name="Component Type"
          required
          fullWidth
          value={type}
          onChange={handleChange}
        >
          <MenuItem value="Cockpit">Cockpit</MenuItem>
          <MenuItem value="Drivetrain">Drivetrain</MenuItem>
          <MenuItem value="Fork">Fork</MenuItem>
          <MenuItem value="Frame">Frame</MenuItem>
          <MenuItem value="Wheel">Wheel</MenuItem>
        </Select>
        <TextField
          inputRef={descriptionRef}
          label="Definition"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button type="submit" fullWidth variant="contained" color="secondary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default DefineComponentForm;
