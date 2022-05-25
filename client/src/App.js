// required dependencies for react usage
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// imports each component for main page structure
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HunterProfilePage from "./components/HunterProfilePage";
import OpenBountiesPage from "./components/OpenBountiesPage";
import LocationPage from "./components/LocationPage";
import { setContext } from '@apollo/client/link/context';
import HomePage from "./components/HomePage";

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  
  const [currentTab, setCurrentTab] = useState("home");

  // functionality to assign requested content/page for viewing
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

  // main page structure that calls the renderTab() function
  return (
    <ApolloProvider client={client}>
    <div>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>{renderTab()}</main>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
