import React from "react";
import API from "../utils/API";
import { Box, Button, Typography } from "@material-ui/core/";

function SubmitComponentForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.currentItem);
    API.updateComponent({
      id: props.currentItem._id,
      name: props.currentItem.name,
      type: props.currentItem.type,
      description: props.currentItem.description,
      pointsOfContact: props.currentItem.pointsOfContact,
      influencers: props.currentItem.influencers,
    })
      .then((result) => {
        console.log(result);
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
    </>
  );
}

export default SubmitComponentForm;
