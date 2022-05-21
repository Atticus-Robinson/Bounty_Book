import React from "react";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from "../utils/auth";

function Navbar(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <div className="header-content">
      <h1
        className={currentTab === "BOUNTYBOOK" ? "navActive" : "header"}
        onClick={() => setCurrentTab("home")}
      >
        BountyBook
      </h1>
      <nav className="pli header-menu">
        <ul>
          <li className={currentTab === "Find a Hunter" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("profile")}>Find A Hunter</span>
          </li>
          <li className={currentTab === "Open Bounties" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("open-bounties")}>
              Open Bounties
            </span>
          </li>
          <li
            className={currentTab === "Search By State" ? "navActive" : "mx-2"}
          >
            <span onClick={() => setCurrentTab("location")}>
              Search By State
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
