import React from "react";

// structure for Location Page using properties from LocationPage.js
const StatesList = (props) => {
  return (
    <path
      d={props.dimensions}
      fill={props.fill}
      data-name={props.state}
      className={`${props.state} state`}
      onClick={props.onClickState}
    >
      <title>{props.stateName}</title>
    </path>
  );
};

export default StatesList;
