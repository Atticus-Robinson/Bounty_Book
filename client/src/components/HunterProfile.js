import React from "react";
import { FaGlobe } from "react-icons/fa";

// sturcture for Hunter Profile Page using properties from HunterProfilePage.js
export default function Project(props) {
  console.log(props);
  return (
    <div className="profile-card">
      <img src={props.image} alt={props.name} />
      <div className="info-group">
        <h3>{props.name}</h3>
        <div className="profile-link">
          <a href={props.details}>
            <FaGlobe></FaGlobe>
          </a>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
