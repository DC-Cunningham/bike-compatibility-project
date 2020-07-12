import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core/";

function LinkComponentForm(props) {
  const [selected, setSelected] = useState([]);

  const selectedButtons = () => {
    return selected.length ? (
      selected.map((item) => {
        return (
          <Button
            key={item._id}
            variant="contained"
            color="primary"
            onClick={() => handleUnlinking(item)}
          >
            {item.name}
          </Button>
        );
      })
    ) : (
      <p>You have not selected any components yet </p>
    );
  };

  const unselectedButtons = () => {
    return props.items.length ? (
      props.items.map((item) => {
        if (
          item._id === props.currentItem._id ||
          selected.some((selectedItem) => selectedItem._id === item._id)
        ) {
          return null;
        }
        return (
          <Button
            key={item._id}
            variant="outlined"
            onClick={() => handleLinking(item)}
          >
            {item.name}
          </Button>
        );
      })
    ) : (
      <p> There are no more components available</p>
    );
  };

  const handleLinking = (item) => {
    const newSelected = selected.concat(item);
    setSelected(newSelected);
  };

  const handleUnlinking = (item) => {
    const unselected = selected.filter(function (obj) {
      return obj._id !== item._id;
    });
    setSelected(unselected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedItems = selected.map(({ name, _id }) => ({
      name: name,
      _id: _id,
    }));
    console.log(selectedItems);
    const item = {
      ...props.currentItem,
      [props.relationship]: props.currentItem[props.relationship].concat(
        selectedItems
      ),
    };
    console.log(item);
    props.setFormState(item);
  };

  return (
    <>
      <div>
        <h5>
          Please select all the components with which a {props.currentItem.name}{" "}
          is {props.name}
        </h5>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          {unselectedButtons()}
        </Grid>
      </Grid>
      <h5> The components selected are below (click to deselect)</h5>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {selectedButtons()}
        </Grid>
      </Grid>
      <br />
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </>
  );
}

export default LinkComponentForm;
