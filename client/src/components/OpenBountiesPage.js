import React from "react";

// imports OpenBounties.js file for overall page struture
import OpenBounties from "./OpenBounties.js";

// structure of main content and it's properties for the Open Bounties Page
const OpenBountiesPage = () => {
  return (
    <section className="open-bounties-title" id="open-bounties">
      <h1>Open Bounties</h1>
      <div className="bounties">
        <OpenBounties
          image={require("../images/oldManMS-3.jpg")}
          name="Williams, Theodore Samuel (aka: 'T-Money')"
          details="https://google.com"
          description="68 year old white male | 5ft 10in. | 132lbs.  Charged with Petty Larceny (shop lifting). Skipped $5,000 bond.  Arrested in
                      Atlanta, GA on 02/15/2022.  Last seen in Birmingham, AL on 05/01/2022. "
        />
        <OpenBounties
          image={require("../images/blackMaleMS-4.jpg")}
          name="Smith, Stanley Leonard (aka: 'Stitch')"
          details="https://google.com"
          description="28 year old black male | 6ft 1in. | 197lbs.  Charged with Grand Larceny (auto theft). Skipped $36,000 bond.  Arrested in
                      Detroit, MI on 06/22/2018.  Last seen in Los Angeles, CA on 010/12/2021. "
        />
        <OpenBounties
          image={require("../images/dreadsMS-5.jpg")}
          name="Rogers, James Quincy (aka: 'Q-Ball')"
          details="https://google.com"
          description="24 year old black male | 5ft 9in. | 155lbs.  Charged with Simple Assault. Skipped $2,000 bond.  Arrested in
                      Chicago, IL on 01/05/2022.  Last seen in Chicago, IL on 04/23/2022. "
        />
        <OpenBounties
          image={require("../images/ladyMS-1.jpg")}
          name="Britania, Sharron Marie (aka: 'Cher')"
          details="https://google.com"
          description="36 year old white female | 5ft 4in. | 140lbs.  Charged with Petty Larceny. Skipped $5,000 bond.  Arrested in
                      Little Rock, AR on 02/19/2020.  Last seen in Memphis, TN on 04/01/2022. "
        />
        <OpenBounties
          image={require("../images/ladyMS-2.jpg")}
          name="Estes, Julie Michelle (aka: 'Jules')"
          details="https://google.com"
          description="43 year old hispanic female | 5ft 10in. | 126lbs.  Charged with Domestic Assault. Skipped $10,000 bond.  Arrested in
                      Slidell, LA on 12/25/2021.  Last seen in New Orleans, LA on 05/01/2022. "
        />
        <OpenBounties
          image={require("../images/longNeckMS-6.jpg")}
          name="Scott, Allen Daniel (aka: 'Stretch')"
          details="https://google.com"
          description="43 year old white male | 6ft 5in. | 140lbs.  Charged with Criminal Possession with Intent. Skipped $1,000,000 bond.  
                      Arrested in Houston, TX on 07/12/2015.  Last seen in Pheonix, AZ on 11/30/2020."
        />
      </div>{" "}
    </section>
  );
};

export default OpenBountiesPage;
