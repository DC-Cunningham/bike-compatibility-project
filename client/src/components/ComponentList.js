import React from "react";
import ComponentCard from "./ComponentCard";

function ComponentCardList({ components }) {
  return components.length ? (
    components.map((component) => (
      <ComponentCard
        key={component.id}
        name={component.name}
        type={component.type}
        pointsOfContact={component.pointsOfContact}
        pointsOfInfluence={component.pointsOfInfluence}
      />
    ))
  ) : (
    <h3>No Results</h3>
  );
}

export default ComponentCardList;
