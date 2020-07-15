import React, { useRef, useState } from "react";
import API from "../utils/API";
import {
  Select,
  FormHelperText,
  MenuItem,
  Paper,
  Button,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

function DefineComponentForm(props) {
  const classes = useStyles();
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
    <>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit}>
          <Typography align="center" variant="h3">
            Define the new component
          </Typography>
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
            <MenuItem value="Brakes">Brakes</MenuItem>
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
      </Paper>
    </>
  );
}

export default DefineComponentForm;
