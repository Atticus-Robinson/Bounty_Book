import React from "react";
import LoginForm from "./LoginForm.js";
import SignupForm from "./SignupForm.js";

const HomePage = () => {
  return (
    <div className="content-window">
      <LoginForm />
      <SignupForm />
    </div>
  );
};

export default HomePage;
