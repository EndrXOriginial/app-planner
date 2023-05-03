import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      {props.description.map(desc => {
        <p className="tile">{desc}</p>
      })}
    </div>
  );
};
