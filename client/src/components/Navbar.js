import React from "react";
import HunterMenu from "./HunterMenu";
import BountiesMenu from "./BountiesMenu";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from "../utils/auth";
const Navbar = () => {
  return (
    <div className="header-content">
      <h1 className="header">BountyBook</h1>
      <div className="header-menu">
        <HunterMenu />
        <BountiesMenu />
      </div>
    </div>
  );
};

export default Navbar;
