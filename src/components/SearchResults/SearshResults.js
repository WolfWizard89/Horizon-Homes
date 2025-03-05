import React, { useState } from "react";
import "./SearchResults.css";
import PropCard from "../PropCard/PropCard";
import Favorites from "../Favorites/Favorites";

// SearchResults component displays the search results and favorite properties
const SearchResults = ({ properties, onViewAll, onImageClick }) => {
  // State to manage the list of favorite properties
  const [favorites, setFavorites] = useState([]);


  // Function to add a property to favorites
  const handleAddToFavorites = (property) => {
    if (!favorites.some((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };


  // Function to remove a property from favorites
  const handleRemoveFromFavorites = (id) => {
    setFavorites(favorites.filter((property) => property.id !== id));
  };


   // Function to clear all favorite properties
  const handleClearFavorites = () => {
    setFavorites([]);
  };


  // Function to handle drop event for adding a property to favorites
  const handleDrop = (event) => {
    event.preventDefault();
    const cardData = event.dataTransfer.getData("property");
    if (cardData) {
      const property = JSON.parse(cardData);
      handleAddToFavorites(property);
    }
  };


  // Function to handle drop event for removing a property from favorites
  const handleDropOutside = (event) => {
    event.preventDefault();
    const favoriteId = event.dataTransfer.getData("favoriteId");
    if (favoriteId) {
      handleRemoveFromFavorites(favoriteId);
    }
  };

  return (
    <div className="search-results" onDragOver={(event) => event.preventDefault()} onDrop={handleDropOutside}>
      <div className="title">
        <h1>Properties:</h1>
      </div>
      <div className="inline-container">
        <PropCard properties={properties} handleAddToFavorites={handleAddToFavorites} onViewAll={onViewAll} onImageClick={onImageClick} />
        <Favorites
          favorites={favorites}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
          handleDrop={handleDrop}
          handleClearFavorites={handleClearFavorites}
          onImageClick={onImageClick}
        />
      </div>
    </div>
  );
};

export default SearchResults;