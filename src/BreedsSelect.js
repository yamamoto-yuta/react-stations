// DO NOT DELETE

import React from "react";

export function BreedsSelect(props) {
  return (
    <select
      value={props.selectedBreed}
      onChange={(e) => props.setSelectedBreed(e.target.value)}
    >
      {Object.keys(props.breeds).map((key, index) => (
        <option
          value={key}
        >{key}</option>
      ))}
    </select >
  );
}