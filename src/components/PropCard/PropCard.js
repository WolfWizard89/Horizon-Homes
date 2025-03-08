import React from "react";
import "./PropCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faLocationDot } from "@fortawesome/free-solid-svg-icons";

// PropCard component displays information about a property card
const PropCard = ({ properties, handleAddToFavorites, onViewAll, onImageClick }) => {
  // Handle drag start event to store the property data for dragging
  const handleDragStart = (event, property) => {
    event.dataTransfer.setData("property", JSON.stringify(property));
  };

  return (
    <section className="r-wrapper">
      {/* Button to view all properties */}
      <div className="reload-btn">
        <button className="re-button" onClick={onViewAll}>View All</button>
      </div>
      <div className="r-container">
        {properties.map((card) => (
          <div
            className="r-card"
            key={card.id}
            draggable={true}
            onDragStart={(event) => handleDragStart(event, card)}
          >
            {/* Property image */}
            <img src={card.picture} alt={card.title} onClick={() => onImageClick(card)} />
            <div className="r-content">
              {/* Property price */}
              <div className="p-price">
                <span>{card.status === "Rent" ? "Rent:" : "Sale:"}</span>
                <span>{card.status === "Rent" ? " £" : " £"}</span>
                <span>{card.price}</span>
              </div>
              {/* Property type */}
              <div className="p-type">
                <span>{card.type}</span>
              </div>
              {/* Property location */}
              <div className="p-location">
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /> {card.location}
                </span>
              </div>
              {/* Property additional information */}
              <div className="otherInfo">
                <span>
                  <span className="impImg">
                    <FontAwesomeIcon icon={faBed} />
                  </span>{" "}
                  Bedrooms: <span>{card.bedrooms}</span>
                </span>
                <span>
                  <span className="impImg">
                    <FontAwesomeIcon icon={faBath} />
                  </span>{" "}
                  Bathrooms: <span>{card.bath}</span>
                </span>
              </div>
              {/* Property description */}
              <div className="description">
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      card.description
                        .split(" ") // Split the description into words
                        .slice(0, 8) // Take the first 8 words
                        .join(" ") // Join them back into a string
                        .replace(/\n/g, "<br>") +
                      (card.description.split(" ").length > 8 ? "..." : ""),
                  }}
                ></span>
              </div>
              {/* Add to favorites button */}
              <div className="r-button">
                <button
                  className="fav-button"
                  onClick={() => handleAddToFavorites(card)}
                >
                  Add to Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropCard;