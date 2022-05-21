import React, { Component } from "react";
import "../index.css";
import USAMap from "react-usa-map";

class LocationPage extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      AL: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for AL", event.target.dataset),
      },
      AK: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for AK", event.target.dataset),
      },
      AZ: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for AZ", event.target.dataset),
      },
      AR: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for AR", event.target.dataset),
      },
      CA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for CA", event.target.dataset),
      },
      CO: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for CO", event.target.dataset),
      },
      CT: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for CT", event.target.dataset),
      },
      DE: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for DE", event.target.dataset),
      },
      FL: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for FL", event.target.dataset),
      },
      GA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for GA", event.target.dataset),
      },
      GA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NJ", event.target.dataset),
      },
      HI: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for HI", event.target.dataset),
      },
      ID: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for ID", event.target.dataset),
      },
      IL: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for IL", event.target.dataset),
      },
      IN: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for IN", event.target.dataset),
      },
      IA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for IA", event.target.dataset),
      },
      KS: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for KS", event.target.dataset),
      },
      KY: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for KY", event.target.dataset),
      },
      LA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for LA", event.target.dataset),
      },
      ME: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for ME", event.target.dataset),
      },
      MD: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MD", event.target.dataset),
      },
      MA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MA", event.target.dataset),
      },
      MI: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MI", event.target.dataset),
      },
      MN: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MN", event.target.dataset),
      },
      MS: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MS", event.target.dataset),
      },
      MO: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MO", event.target.dataset),
      },
      MT: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MT", event.target.dataset),
      },
      NE: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NE", event.target.dataset),
      },
      NV: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NV", event.target.dataset),
      },
      NH: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NH", event.target.dataset),
      },
      NJ: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NJ", event.target.dataset),
      },
      NM: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NM", event.target.dataset),
      },
      NY: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NY", event.target.dataset),
      },
      NC: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NC", event.target.dataset),
      },
      ND: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for ND", event.target.dataset),
      },
      OH: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for OH", event.target.dataset),
      },
      OK: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for OK", event.target.dataset),
      },
      OR: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for OR", event.target.dataset),
      },
      PA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for PA", event.target.dataset),
      },
      RI: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for RI", event.target.dataset),
      },
      SC: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for SC", event.target.dataset),
      },
      SD: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for SD", event.target.dataset),
      },
      TN: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for TN", event.target.dataset),
      },
      TX: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for TX", event.target.dataset),
      },
      UT: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for UT", event.target.dataset),
      },
      VT: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for VT", event.target.dataset),
      },
      VA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for VA", event.target.dataset),
      },
      WA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for WA", event.target.dataset),
      },
      WV: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for WV", event.target.dataset),
      },
      WI: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for WI", event.target.dataset),
      },
      WY: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for WY", event.target.dataset),
      },
    };
  };

  render() {
    return (
      <section className="location-title" id="location">
        <h1>Find By Location</h1>
        <div className="location">
          <USAMap
            customize={this.statesCustomConfig()}
            onClick={this.mapHandler}
          />
        </div>
      </section>
    );
  }
}

export default LocationPage;
