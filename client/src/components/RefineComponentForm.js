import React, { useState } from "react";
import API from "../utils/API";
import {
  Button,
  FormHelperText,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core/";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    padding: theme.spacing(2),
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
  type: {
    [theme.breakpoints.down(960)]: {
      fontSize: theme.spacing(3),
    },
  },
}));

function RefineComponentForm(props) {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [item, setItem] = useState({
    id: props.currentItem._id,
    name: props.currentItem.name,
    type: props.currentItem.type,
    definition: props.currentItem.definition,
    wikiLink: props.currentItem.wikiLink,
    pointsOfContact: props.currentItem.pointsOfContact,
    influencers: props.currentItem.influencers,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    API.updateComponent({
      _id: item.id,
      name: item.name,
      type: item.type,
      definition: item.definition,
      wikiLink: item.wikiLink,
      pointsOfContact: item.pointsOfContact,
      influencers: item.influencers,
    })
      .then((result) => {
        console.log(result.data.data);
        props.setFormState(result.data.data.component);
      })
      .catch((e) => setError(e.response.data.message));
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    props.resetFormState();
  };

  return (
    <>
      <Paper className={classes.paper} elevation={6}>
        <form>
          <Typography className={classes.type} align="center" variant="h4">
            Edit the component
          </Typography>
          <TextField
            name="name"
            value={item.name}
            onChange={handleChange}
            label="Component Name (required)"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <FormHelperText>Component Type (required)</FormHelperText>
          <Select
            name="type"
            required
            fullWidth
            value={item.type}
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
            name="definition"
            value={item.definition}
            onChange={handleChange}
            label="Definition"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
          />
          <TextField
            name="wikiLink"
            value={item.wikiLink}
            onChange={handleChange}
            label="Wikipedia Link"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          {error && <Alert severity="error">{error}</Alert>}
          <br />
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            Continue
          </Button>
          <Button
            align="left"
            variant="contained"
            color="primary"
            onClick={handleBackClick}
          >
            Back
          </Button>
        </form>
      </Paper>
    </>
  );
}

export default RefineComponentForm;
