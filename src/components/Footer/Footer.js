import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

// Handle drag start event to store the favorite ID for removal
const Footer = () => {
  return (
    <section className="Footer-wrapper">
      <div className="footer_container">
        {/* Copyright information */}
        <div className="copy">
          <span>© Horizon Homes 2022-2024. All RIGHTS RESERVED</span>
        </div>
        {/* Company logo and slogan */}
        <div className="company">
          <div className="logo-Img">
            <img
              src="./logo.png"
              alt="Horizon homes logo"
              width={100}
              style={{ margin: -10 }}
            />
          </div>
          <div className="foot-slogan">
            <span>Building Dreams, Creating Futures</span>
          </div>
        </div>
        {/* Contact information */}
        <div className="contacts">
          <div className="contact-txt">
            <span>Contact Us:</span>
          </div>
          {/* Social media icons */}
          <div className="contact-imgs">
            <div className="facebook">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </div>
            <div className="instergram">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="mail">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
