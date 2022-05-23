import React from "react";

// imports HunterProfile.js for the Hunter Profile Page structure
import HunterProfile from "./HunterProfile.js";

// Hunter Profile Page properties to be used with page structure assigned by HunterProfile.js
const HunterProfilePage = () => {
  return (
    <section className="profile-title" id="profile">
      <h1>Fugitive Recovery Agents</h1>
      <div className="profiles">
        <HunterProfile
          image={require("../images/machinegun.png")}
          name="Donnie 'Hit Man' Vidacovich"
          details="https://google.com"
          description="My name is Donnie.  I'm called the hitman for a reason.  I have 22 plus years
                      of experience hunting fugitives, and I have a 94% success rate.  The other 6%
                      weren't lucky enough to make it back alive.  I mean business, and my business
                      is being mean! If you want the job done, I'm your man!"
        />
        <HunterProfile
          image={require("../images/sexyRedDress.png")}
          name="Malina 'The Mistress' Hernandez"
          details="https://google.com"
          description="My name is Malina.  I'm called the mistress because I can get any man I want 
                      to crawl to me.  I may only have 4 years of experience hunting fugitives, but
                      I'm really good at what I do! I have a 100% success rate."
        />
        <HunterProfile
          image={require("../images/warrior.png")}
          name="William 'The Warrior' O'Malley"
          details="https://google.com"
          description="My name is William. Some of these fugitives are tough.  I have 24 years
                      of experience man-handling them. I have a 90% success rate. I'm 6ft 7in and
                      325lbs of pure muscle.  My hands are my weapons"
        />
        <HunterProfile
          image={require("../images/hipgirl.jpg")}
          name="Nikki 'The Hacker' Thornton"
          details="https://google.com"
          description="My name is Nichole, or Nikki.  I have 3 years of experience hunting fugitives
                      with a success rate of 100%.  I have a unique approach to capturing my targets.
                      I hack into their personal accounts to track their every move, and lure them
                      into a trap...they never even lay eyes on me."
        />
        <HunterProfile
          image={require("../images/devil.png")}
          name="The Devil"
          details="https://google.com"
          description="35 years - 100% - That's all you need to know!"
        />
        <HunterProfile
          image={require("../images/xingh.png")}
          name="Xing Hu"
          details="https://google.com"
          description="I'm Xing Hu.  I was a professional bounty hunter for the Chinese Government for
                      12 years.  I have captured some of the highest profile drug cartel leaders and 
                      hinchmen in the world.  My price is high, but my technique is priceless, and 
                      guaranteed.  I am a ghost, so your fugitives will never see me coming.  I employ a
                      unique team of professionals that follow a strict protocol adopted from my governmental
                      training.  Success rate 100%!"
        />
      </div>{" "}
    </section>
  );
};

export default HunterProfilePage;
