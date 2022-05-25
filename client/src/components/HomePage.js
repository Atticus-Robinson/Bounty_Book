import React from "react";
import LoginForm from "./LoginForm.js";
import SignupForm from "./SignupForm.js";
import BountyForm from './BountyForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const HomePage = () => {
  const { data: userData } = useQuery(QUERY_ME);

  const loggedIn = Auth.loggedIn();

  return (
    <div className="content-window">
      {Auth.loggedIn() ? (
        <>
        <BountyForm />
        </>
      ) : (
        <>
        <LoginForm />
      <SignupForm />
        </>
      )}

    </div>
  );
};

export default HomePage;
