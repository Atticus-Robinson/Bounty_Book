import React from "react";
import ReactIcon from "../images/react.svg";
import { FaGithub, FaLinkedin, FaSlack } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="line-position">
        <h5 className="navbar-text">
          UI created using <img className="svg" src={ReactIcon} alt="react" />
          &trade; React
        </h5>
      </div>

      <ul className="footer-icons">
        <li className="row-xs-6 row-sm-2">
          <h2>
            <a
              href="https://github.com/Atticus-Robinson/Bounty_Book/tree/main"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub></FaGithub>
            </a>
          </h2>
        </li>
        <li className="row-xs-6 row-sm-2">
          <h2>
            <a
              href="https://linkedin.com/in/william-lowrimore-21778310"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </h2>
        </li>
        <li className="row-xs-6 row-sm-2">
          <h2>
            <a
              href="https://vuvirtbofsfpt-pjf3765.slack.com/app_redirect?channel=D02QTGL4KAQ"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaSlack></FaSlack>
            </a>
          </h2>
        </li>
      </ul>

      <div className="line-position">
        <h5 className="navbar-text">
          {" "}
          All Rights Reserved &copy; Bounty Book 2022{" "}
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
