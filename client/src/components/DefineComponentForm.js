import React, { useState } from "react";
import API from "../utils/API";
import {
  Grid,
  Select,
  FormHelperText,
  MenuItem,
  Paper,
  Button,
  TextField,
  makeStyles,
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

function DefineComponentForm(props) {
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
    API.saveComponent({
      name: item.name,
      type: item.type,
      definition: item.definition,
      wikiLink: item.wikiLink,
    })
      .then((result) => {
        console.log(result);
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
        <form onSubmit={handleSubmit}>
          <Typography className={classes.type} align="center" variant="h4">
            Define the component
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
          {/* <Button type="submit" fullWidth variant="contained" color="secondary">
            Submit
          </Button> */}
        </form>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="baseline"
        >
          <Button
            align="left"
            variant="contained"
            color="primary"
            onClick={handleBackClick}
          >
            Back
          </Button>
          <Button
            align="right"
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Continue
          </Button>
        </Grid>
      </Paper>
    </>
  );
}

export default DefineComponentForm;
