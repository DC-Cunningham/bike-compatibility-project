import React from "react";

function ComponentCard({ name, type, pointsOfContact, pointsOfInfluence }) {
  return (
    <div key={name}>
      <h4>{name}</h4>
      <p>Component Type: {type}</p>
      <p>{pointsOfContact}</p>
      <p>{pointsOfInfluence}</p>
    </div>
  );
}

export default ComponentCard;
