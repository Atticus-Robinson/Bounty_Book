import React, { Component } from "react";
import "../index.css";
import USAMap from "react-usa-map";

// Location Page functionality and custom color with clickHandler
class LocationPage extends Component {
  // mapHandler for functionality and logged U.S. State info
  mapHandler = (event) => {
    console.log(event.target.dataset.name);
  };

  // customization of filling per state and calling custom callbacks per state
  statesCustomConfig = () => {
    return {
      AL: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for ALABAMA", event.target.dataset),
      },
      AK: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for ALASKA", event.target.dataset),
      },
      AZ: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for ARIZONA", event.target.dataset),
      },
      AR: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for ARKANSAS", event.target.dataset),
      },
      CA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for CALIFORNIA", event.target.dataset),
      },
      CO: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for COLORADO", event.target.dataset),
      },
      CT: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for CONNECTICUT", event.target.dataset),
      },
      DE: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for DELAWARE", event.target.dataset),
      },
      FL: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for FLORIDA", event.target.dataset),
      },
      GA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for GEORGIA", event.target.dataset),
      },
      HI: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for HAWAII", event.target.dataset),
      },
      ID: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for IDAHO", event.target.dataset),
      },
      IL: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for ILLINOIS", event.target.dataset),
      },
      IN: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for INDIANA", event.target.dataset),
      },
      IA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for IOWA", event.target.dataset),
      },
      KS: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for KANSAS", event.target.dataset),
      },
      KY: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for KENTUCKY", event.target.dataset),
      },
      LA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for LOUISIANA", event.target.dataset),
      },
      ME: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MAINE", event.target.dataset),
      },
      MD: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MARYLAND", event.target.dataset),
      },
      MA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MASSACHUSETTS", event.target.dataset),
      },
      MI: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MICHIGAN", event.target.dataset),
      },
      MN: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MINNESOTA", event.target.dataset),
      },
      MS: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MISSISSIPPI", event.target.dataset),
      },
      MO: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MISSOURI", event.target.dataset),
      },
      MT: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for MONTANA", event.target.dataset),
      },
      NE: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NEBRASKA", event.target.dataset),
      },
      NV: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NEVADA", event.target.dataset),
      },
      NH: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NEW HAMPSHIRE", event.target.dataset),
      },
      NJ: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NEW JERSEY", event.target.dataset),
      },
      NM: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NEW MEXICO", event.target.dataset),
      },
      NY: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NEW YORK", event.target.dataset),
      },
      NC: {
        fill: "gray",
        clickHandler: (event) =>
          console.log(
            "Custom handler for NORTH CAROLINA",
            event.target.dataset
          ),
      },
      ND: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for NORTH DAKOTA", event.target.dataset),
      },
      OH: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for OHIO", event.target.dataset),
      },
      OK: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for OKLAHOMA", event.target.dataset),
      },
      OR: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for OREGON", event.target.dataset),
      },
      PA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for PENNSYLVANIA", event.target.dataset),
      },
      RI: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for RHODE ISLAND", event.target.dataset),
      },
      SC: {
        fill: "gray",
        clickHandler: (event) =>
          console.log(
            "Custom handler for SOUTH CAROLINA",
            event.target.dataset
          ),
      },
      SD: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for SOUTH DAKOTA", event.target.dataset),
      },
      TN: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for TENNESSEE", event.target.dataset),
      },
      TX: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for TEXAS", event.target.dataset),
      },
      UT: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for UTAH", event.target.dataset),
      },
      VT: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for VERMONT", event.target.dataset),
      },
      VA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for VIRGINIA", event.target.dataset),
      },
      WA: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for WASHINGTON", event.target.dataset),
      },
      WV: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for WEST VIRGINIA", event.target.dataset),
      },
      WI: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for WISCONSIN", event.target.dataset),
      },
      WY: {
        fill: "gray",
        clickHandler: (event) =>
          console.log("Custom handler for WYOMING", event.target.dataset),
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
