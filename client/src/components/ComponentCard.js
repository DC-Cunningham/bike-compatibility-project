import React from "react";
import { Button } from "@material-ui/core/";

function ComponentCard(props) {
  const {
    name,
    type,
    description,
    pointsOfContact,
    influencers,
  } = props.currentItem;

  const POIarray = () => {
    return pointsOfContact.length ? (
      pointsOfContact.map((item) => {
        return (
          <Button
            key={item._id}
            variant="outlined"
            // onClick={() => handleLinking(item)}
          >
            {item.name}
          </Button>
        );
      })
    ) : (
      <p> There are no components that come into contact with a {name}</p>
    );
  };

  const InfArray = () => {
    return influencers.length ? (
      influencers.map((item) => {
        return (
          <Button
            key={item._id}
            variant="outlined"
            // onClick={() => handleLinking(item)}
          >
            {item.name}
          </Button>
        );
      })
    ) : (
      <p> There are no components that are considered to influence a {name}</p>
    );
  };

  return (
    <div key={name}>
      <h4>{name}</h4>
      <p>Component Type: {type}</p>
      <p>{description}</p>
      {POIarray()}
      {InfArray()}
    </div>
  );
}

export default ComponentCard;
