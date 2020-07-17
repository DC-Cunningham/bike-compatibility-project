import React from "react";
import { useHistory } from "react-router-dom";

import {
  Avatar,
  Button,
  GridListTile,
  GridList,
  Icon,
  makeStyles,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "auto",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  gridList: {
    padding: theme.spacing(2),
  },
}));

function ComponentCard(props) {
  const classes = useStyles();
  const history = useHistory();

  const {
    name,
    type,
    definition,
    pointsOfContact,
    influencers,
    wikiLink,
  } = props.currentItem;

  const pointOfContactArray = () => {
    return pointsOfContact.length ? (
      pointsOfContact.map((item) => {
        return (
          <GridListTile key={item._id} cols={1}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => handleClick(item)}
            >
              {item.name}
            </Button>
          </GridListTile>
        );
      })
    ) : (
      <GridListTile key="none" cols={3}>
        <Typography variant={"body1"} gutterBottom>
          There are no components that come into contact with a {name}
        </Typography>
      </GridListTile>
    );
  };

  const influencersArray = () => {
    return influencers.length ? (
      influencers.map((item) => {
        return (
          <GridListTile key={item._id} cols={1}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => handleClick(item)}
            >
              {item.name}
            </Button>
          </GridListTile>
        );
      })
    ) : (
      <GridListTile key="none" cols={3}>
        <Typography display="block" variant={"body1"} gutterBottom>
          There are no components that are considered to influence a {name}
        </Typography>
      </GridListTile>
    );
  };

  const handleClick = (newItem) => {
    console.log(newItem);
    const selected = props.items.find((item) => item._id === newItem._id);
    console.log(selected);
    props.setFormState(selected);
  };

  return (
    <div className="App">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant={"h5"} gutterBottom>
            {name}
          </Typography>
          {/* <Avatar src={`Icon.${type}`} /> */}

          <Typography variant={"caption"}>{definition}</Typography>
          <Divider className={classes.divider} light />
          <Typography variant={"caption"}>
            Components that contact a {name}:
          </Typography>
          <GridList
            cellHeight="auto"
            spacing={8}
            className={classes.gridList}
            cols={3}
          >
            {pointOfContactArray()}
          </GridList>
          <Divider className={classes.divider} light />
          <Typography variant={"caption"}>
            Components that influence a {name}:
          </Typography>
          <GridList
            cellHeight="auto"
            spacing={8}
            className={classes.gridList}
            cols={3}
          >
            {influencersArray()}
          </GridList>
          <Divider className={classes.divider} light />
          {wikiLink ? (
            <Button
              fullWidth
              target="_blank"
              variant="contained"
              href={wikiLink}
            >
              See Component on Wikipedia
            </Button>
          ) : (
            <></>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default ComponentCard;
