import React from "react";
import data from "./dataLogements.json";
const Card = ({ elements }) => {
  return (
    <div className="container">
      {data.map((elements) => (
        <div key={elements.identifiant} className="card">
          <img src={elements.cover} alt={elements.title} />
          <h2>{elements.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;
