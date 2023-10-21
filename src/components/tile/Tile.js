import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">{name}</p>
      {Object.values(description).map((element, index) => {
        return <p className="tile" key={index}>{element}</p>
      })}
    </div>
  );
};
