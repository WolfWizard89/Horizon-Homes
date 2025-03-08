import React from "react";
import "./Favorites.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faLocationDot } from "@fortawesome/free-solid-svg-icons";


// Favorites component displays the list of favorite properties
const Favorites = ({
  favorites,
  handleRemoveFromFavorites,
  handleDrop,
  handleClearFavorites,
  onImageClick,
}) => {
  // Handle drag over event to allow dropping
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle drag start event to store the favorite ID for removal
  const handleDragStart = (event, id) => {
    event.dataTransfer.setData("favoriteId", id); // Store favorite ID for removal
  };

  return (
    <section className="fav-wrapper">
      <div
        className="fav-container"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="fav-top">
          <div className="title">
            <h1>Favorites:</h1>
          </div>
          <div className="clear">
            <button className="clear-button" onClick={handleClearFavorites}>
              Clear All
            </button>
          </div>
        </div>
        {favorites.map((fav) => (
          <div
            className="fav-card"
            key={fav.id}
            draggable={true}
            onDragStart={(event) => handleDragStart(event, fav.id)}
          >
            {/* Property image */}
            <img src={fav.picture} alt={fav.title} onClick={() => onImageClick(fav)} />
            <div className="fav-content">
              {/* Property price */}
              <div className="p-price">
                <span>{fav.status === "Rent" ? "Rent:" : "Sale:"}</span>
                <span>{fav.status === "Rent" ? " £" : " £"}</span>
                <span>{fav.price}</span>
              </div>
              {/* Property type */}
              <div className="p-type">
                <span>{fav.type}</span>
              </div>
              {/* Property location */}
              <div className="p-location">
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /> {fav.location}
                </span>
              </div>
              {/* Property additional information */}
              <div className="otherInfo">
                <span>
                  <span className="impImg">
                    <FontAwesomeIcon icon={faBed} />
                  </span>{" "}
                  Bedrooms: <span>{fav.bedrooms}</span>
                </span>
                <span>
                  <span className="impImg">
                    <FontAwesomeIcon icon={faBath} />
                  </span>{" "}
                  Bathrooms: <span>{fav.bath}</span>
                </span>
              </div>
              {/* Remove from favorites button */}
              <div className="r-button">
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromFavorites(fav.id)}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;