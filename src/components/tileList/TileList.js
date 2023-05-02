import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      {props.objectList.map(obj => {
        <Tile name={obj.name} description={obj.description} />
      })}
    </div>
  );
};
