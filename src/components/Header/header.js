import React from "react";
import "./header.css";

// Header component displays the header section of the website
const Header = ({ onResidenciesClick, onGetStartClick, onContactUsClick}) => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        {/* Company logo */}
        <img src="./logo.png" alt="Horizon homes logo" width={100} style={{ margin: -10 }} />
        <div className="flexCenter h-menu">
          {/* Navigation links */}
          <a href="#!" onClick={onResidenciesClick}>Residencies</a>
          <a href="#!" onClick={onContactUsClick}>Contact us</a>
          <a href="#!" onClick={onGetStartClick}>Get Start</a>
          {/* Contact button */}
          <button className="button">
            <a href="mailto:ebbhanuka@gmail.com">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;