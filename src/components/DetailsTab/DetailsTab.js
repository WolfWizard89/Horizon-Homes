import React, { useState, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./DetailsTab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faLocationDot,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

// DetailsTab component displays detailed information about a property
const DetailsTab = ({ property }) => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("description");
  // Reference to the carousel component
  const carouselRef = useRef(null);

  // Function to handle previous button click in the carousel
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement();
    }
  };

  // Function to handle next button click in the carousel
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  return (
    <div className="details-tab">
      <h2>{property.type}</h2>

      {/* Carousel to display property images */}
      <Carousel
        ref={carouselRef}
        showThumbs={true}
        showStatus={true}
        infiniteLoop={true}
        useKeyboardArrows={true}
      >
        {property.CarousalImg.map((img, index) => (
          <div className="carousalImgs" key={index}>
            <img src={img} alt={`Property ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      {/* Carousel controls */}
      <div className="carousel-controls">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>

      {/* Property price */}
      <div className="price-tab">
        <span className="price-txt">Price:</span>
        <span className="euro">
          £ <span className="numPrice">{property.price}</span>
        </span>
      </div>

      {/* Property room information */}
      <div className="roomInfo">
        <div className="bed">
          <div className="Img">
            <FontAwesomeIcon icon={faBed} />
          </div>
          <span className="bed-txt"> Bedrooms:</span> {property.bedrooms}
        </div>
        <div className="bath">
          <div className="Img">
            <FontAwesomeIcon icon={faBath} />
          </div>
          <span className="bath-txt"> Bathrooms:</span> {property.bath}
        </div>
      </div>

      {/* Property location */}
      <div className="location">
        <div className="locImg">
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <span className="loc-txt"> Location:</span> {property.location}
      </div>

      {/* Property tenure */}
      <div className="tenure">
        <div className="ten-img">
          <FontAwesomeIcon icon={faBuilding} />
        </div>
        <span className="ten-txt">Tenure:</span> {property.tenure}
      </div>
      <div className="date">
        <span className="date-txt">Date Added:</span> {property.added.day}{" "}
        {property.added.month} {property.added.year}
      </div>
      {/* Tabs for description, floor plan, and map */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`tab ${activeTab === "floorPlan" ? "active" : ""}`}
          onClick={() => setActiveTab("floorPlan")}
        >
          Floor Plan
        </button>
        <button
          className={`tab ${activeTab === "map" ? "active" : ""}`}
          onClick={() => setActiveTab("map")}
        >
          Map
        </button>
      </div>

      {/* Conditional rendering based on the active tab */}
      {activeTab === "description" && (
        <div className="description1">
          <span className="des-txt">Description:</span>{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: property.description.replace(/\n/g, "<br>"),
            }}
          ></span>
        </div>
      )}
      {activeTab === "floorPlan" && (
        <div className="floorPlan">
          <img src={property.floorPlan} alt={property.title} />
        </div>
      )}
      {activeTab === "map" && (
        <div className="map">
          <iframe
            title="Property Location"
            src={property.map}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default DetailsTab;
