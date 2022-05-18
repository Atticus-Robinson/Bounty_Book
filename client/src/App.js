import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage";

function App() {
  const [currentTab, setCurrentTab] = useState("home");

  const renderTab = () => {
    switch (currentTab) {
      case "home":
        return <HomePage />;
    }
  };

  return (
    <div>
      <Navbar />
      <main>{renderTab()}</main>
      <Footer />
    </div>
  );
}

export default App;
