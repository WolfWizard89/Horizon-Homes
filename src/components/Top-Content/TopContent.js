import React, { useState } from "react";
import "./TopContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


// TopContent component displays the top content section of the website
const TopContent = ({ onSearch }) => {
  // State to manage the search term input
  const [searchTerm, setSearchTerm] = useState("");


  // Function to handle search button clicks
  const handleSearch = (status) => {
    onSearch(searchTerm, status);
  };
  return (
    <section className="T-wrapper">
      <div className="flexCenter paddings innerWidth T-container">
        <div className="T-left">
          <div className="T-title">
            <h1>
              Welcome to
              <br />
              Horizon Homes
            </h1>
          </div>
          <div className="flexColStart T-descrip">
            <span className="slogan">Building Dreams, Creating Futures</span>
            <span className="S-text">
              Leave the hassle of finding a residence behind—We're here to make
              it easy for you!
            </span>
          </div>
          <div className="flexCenter search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            {/* Search input field */}
            <input
              type="text"
              placeholder="e.g. Rent, London, or House "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Search buttons for Sale and Rent */}
            <button
              className="search-button"
              onClick={() => handleSearch("Sale")}
            >
              Sale
            </button>
            <button
              className="search-button"
              onClick={() => handleSearch("Rent")}
            >
              Rent
            </button>
          </div>
        </div>
        <div className="flexCenter T-right">
          <div className="image-container">
            {/* Carousel to display images */}
          <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={4000}
              transitionTime={500}
              stopOnHover={false}
              showArrows={false}
              showIndicators={false}
            >
              <div>
                <img src="./apt3.jpg" alt="Apartment building photo1" />
              </div>
              <div>
                <img src="./apt2.jpg" alt="Apartment building photo2" />
              </div>
              <div>
                <img src="./apt1.jpg" alt="Apartment building photo3" />
              </div>
              <div>
                <img src="./apt4.jpg" alt="Apartment building photo3" />
              </div>
              <div>
                <img src="./apt5.jpg" alt="Apartment building photo3" />
              </div>
              <div>
                <img src="./apt6.jpg" alt="Apartment building photo3" />
              </div>
              <div>
                <img src="./apt7.jpg" alt="Apartment building photo3" />
              </div>
            </Carousel>
          </div>
        </div>

        <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span>
              {/* imported Countup library for countup numbers animation */ }
              <CountUp start={1000} end={1200} duration={4} />
              <span>+</span>
            </span>
            <span className="stat-text">Sold Properties</span>
          </div>
          <div className="flexColCenter stat">
            <span>
              <CountUp start={480} end={540} duration={4} />
              <span>+</span>
            </span>
            <span className="stat-text">Rented Properties</span>
          </div>
          <div className="flexColCenter stat">
            <span>
              <CountUp start={1400} end={1500} duration={4} />
              <span>+</span>
            </span>
            <span className="stat-text">Our Customers</span>
          </div>
          <div className="flexColCenter stat">
            <span>
              <CountUp start={5} end={11} duration={4} />
              <span>+</span>
            </span>
            <span className="stat-text">Awards</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopContent;
