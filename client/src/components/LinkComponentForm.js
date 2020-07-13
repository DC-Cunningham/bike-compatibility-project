import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  GridListTile,
  GridList,
  makeStyles,
  Typography,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    // height: 450,
  },
}));

function LinkComponentForm(props) {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSelected(props.currentItem[props.relationship]);
  }, []);

  const selectedButtons = () => {
    return selected.length ? (
      selected.map((item) => {
        return (
          <GridListTile key={item._id} cols={1}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleUnlinking(item)}
            >
              {item.name}
            </Button>
          </GridListTile>
        );
      })
    ) : (
      <GridListTile cols={3}>
        <Typography align="center" color="primary" variant="h5">
          There are no selected components yet
        </Typography>
      </GridListTile>
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
          <GridListTile key={item._id} cols={1}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => handleLinking(item)}
            >
              {item.name}
            </Button>
          </GridListTile>
        );
      })
    ) : (
      <GridListTile cols={3}>
        <Typography align="center" color="secondary" variant="h5">
          There are no more components available
        </Typography>
      </GridListTile>
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
    const item = {
      ...props.currentItem,
      [props.relationship]: selectedItems,
    };
    props.setFormState(item);
  };

  return (
    <>
      <Box textAlign="center">
        <Typography variant="h4">
          Please select all the components with which a
        </Typography>
        <Typography variant="h3">{props.currentItem.name}</Typography>
        <Typography variant="h4">is</Typography>
        <Typography variant="h3">{props.name}</Typography>
      </Box>
      <GridList
        cellHeight="auto"
        spacing={8}
        className={classes.gridList}
        cols={3}
      >
        {unselectedButtons()}
      </GridList>
      <h5> The components selected are below (click to deselect)</h5>
      <GridList
        cellHeight="auto"
        spacing={8}
        className={classes.gridList}
        cols={3}
      >
        {selectedButtons()}
      </GridList>
      <br />
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
      >
        Continue
      </Button>
    </>
  );
}

export default LinkComponentForm;
