import React, { Component } from "react";
import USAMap from "react-usa-map";
import App from "../App";

class Location extends Component {
  mapHandler = (e) => {
    alert(e.target.dataset.name);
  };

  render() {
    return (
      <div className="Location">
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}

export default Location;
