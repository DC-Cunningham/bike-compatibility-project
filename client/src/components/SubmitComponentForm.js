import React, { useState } from "react";
import API from "../utils/API";
import { Button } from "@material-ui/core/";
import ComponentCard from "../components/ComponentCard";

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
      <div>
        <h4>You are creating the component</h4>
        <h3> {props.currentItem.name}</h3>
      </div>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
      >
        Confirm
      </Button>
    </>
  );
}

export default SubmitComponentForm;
