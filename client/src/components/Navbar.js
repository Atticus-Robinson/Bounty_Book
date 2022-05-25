import React from "react";
import Auth from "../utils/auth";

// Constant Navigation/Header that will appear on every page
function Navbar(props) {
  const { currentTab, setCurrentTab } = props;
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

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
          {Auth.loggedIn() &&
          (<li
           className="mx-2">
            <span onClick={logout} >Log Out</span>
          </li>)
          }
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
