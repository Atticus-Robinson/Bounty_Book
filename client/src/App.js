import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HunterProfilePage from "./components/HunterProfilePage";
import OpenBountiesPage from "./components/OpenBountiesPage";
import LocationPage from "./components/LocationPage";

import HomePage from "./components/HomePage";

function App() {
  const [currentTab, setCurrentTab] = useState("home");

  const renderTab = () => {
    switch (currentTab) {
      case "home":
        return <HomePage />;
      case "profile":
        return <HunterProfilePage />;
      case "open-bounties":
        return <OpenBountiesPage />;
      case "location":
        return <LocationPage />;
    }
  };

  return (
    <div>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>{renderTab()}</main>
      <Footer />
    </div>
  );
}

export default App;
