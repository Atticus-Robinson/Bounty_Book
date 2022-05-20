import React from "react";
import HunterMenu from "./HunterMenu";
import BountiesMenu from "./BountiesMenu";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from "../utils/auth";

function Navbar(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <div className="header-content">
      <h1 className="header">BountyBook</h1>
      <div className="header-menu">
        <HunterMenu />
        <BountiesMenu />
      </div>
      <nav className="pli">
        <ul>
          <li className={currentTab === "Find a Hunter" ? "navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("profile")}>Find A Hunter</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
