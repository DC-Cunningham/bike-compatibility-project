import React from "react";
import API from "../utils/API";
import { Box, Button, Typography } from "@material-ui/core/";

function SubmitComponentForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.currentItem);
    API.updateComponent(props.currentItem)
      .then((result) => {
        props.setFormState(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box textAlign="center">
        <Typography variant="h4">You have {props.term} the</Typography>
        <Typography variant="h3"> {props.currentItem.name}</Typography>
        <Typography variant="h4">component</Typography>
      </Box>
      <br />
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
      >
        Save to the database
      </Button>
      <br />
    </>
  );
}

export default SubmitComponentForm;
