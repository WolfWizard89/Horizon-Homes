import React, { useState } from "react";
import "./AdvanceSearch.css";
import TextField from "@mui/material/TextField";

// AdvanceSearch component allows users to filter properties based on various criteria
const AdvanceSearch = ({ onAdvancedSearch }) => {
  // State variables to manage the form inputs
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("any");
  const [status, setStatus] = useState("any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [postcode, setPostcode] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onAdvancedSearch function passed as a prop with the form data
    onAdvancedSearch({
      type,
      status,
      minPrice,
      maxPrice,
      minBedrooms,
      maxBedrooms,
      dateAdded,
      postcode,
    });
  };

  // Toggle the accordion open/close state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="advance-search">
      <div className="accordin">
        <button className="accordion-toggle" onClick={toggleAccordion}>
          Search Property by Filter
        </button>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <form onSubmit={handleSubmit}>
          {/* Property Type Filter */}
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="any">Any</option>
              <option value="house">House</option>
              <option value="flat">Flat</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>
          {/* Property Status Filter */}
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="any">Any</option>
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          {/* Price Filters */}
          <div className="price">
            <TextField
              fullWidth
              margin="normal"
              label="Min Price"
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Max Price"
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          {/* Bedroom Filters */}
          <div className="bedroom">
            <TextField
              fullWidth
              margin="normal"
              label="Min Bedrooms"
              type="number"
              value={minBedrooms}
              onChange={(e) => setMinBedrooms(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Max Bedrooms"
              type="number"
              value={maxBedrooms}
              onChange={(e) => setMaxBedrooms(e.target.value)}
            />
          </div>

          {/* Date Added Filter */}
          <div className="form-group">
            <label htmlFor="dateAdded">Date Added:</label>
            <input
              type="date"
              id="dateAdded"
              value={dateAdded}
              onChange={(e) => setDateAdded(e.target.value)}
            />
          </div>
          {/* Postcode Filter */}
          <div className="post">
            <TextField
              fullWidth
              margin="normal"
              label="Postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default AdvanceSearch;
