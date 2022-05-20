import React from "react";

export default function OpenBounties(props) {
  console.log(props);
  return (
    <div className="bounties-card">
      <img src={props.image} alt={props.name} />
      <div className="info-group">
        <h3>{props.name}</h3>
        <div className="bounties-link">
          <a href={props.details}>Public Arrest Record</a>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
