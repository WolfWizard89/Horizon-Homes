import React, { useState, useRef } from "react";
import Header from "./components/Header/header";
import "./App.css";
import TopContent from "./components/Top-Content/TopContent";
import SearchResults from "./components/SearchResults/SearshResults";
import data from "./data/properties.json";
import Modal from "./components/Modal/Modal";
import AdvanceSearch from "./components/AdvanceSearch/AdvanceSearch";
import DetailsTab from "./components/DetailsTab/DetailsTab";
import Footer from "./components/Footer/Footer";

function App() {
  // State to manage the filtered properties
  const [filteredProperties, setFilteredProperties] = useState(data.properties);
  // State to manage the modal open/close status
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to manage the selected property for the modal
  const [selectedProperty, setSelectedProperty] = useState(null);
  // References to different sections of the page
  const searchResultsRef = useRef(null);
  const topContentRef = useRef(null);
  const footerRef = useRef(null);


  // Function to handle search based on search term and status
  const handleSearch = (searchTerm, status) => {
    const filtered = data.properties.filter((property) => {
      const matchesStatus = property.status === status;
      const matchesSearchTerm = searchTerm
        ? property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.type.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchesStatus && matchesSearchTerm;
    });
    setFilteredProperties(filtered);
  };


  // Function to view all properties
  const handleViewAll = () => {
    setFilteredProperties(data.properties);
  };


  // Function to handle advanced search based on various criteria
  const handleAdvancedSearch = (criteria) => {
    const filtered = data.properties.filter((property) => {
      const matchesType =
        criteria.type === "any" ||
        property.type.toLowerCase() === criteria.type.toLowerCase();
      const matchesStatus =
        criteria.status === "any" ||
        property.status.toLowerCase() === criteria.status.toLowerCase();
      const matchesMinPrice = criteria.minPrice
        ? property.price >= criteria.minPrice
        : true;
      const matchesMaxPrice = criteria.maxPrice
        ? property.price <= criteria.maxPrice
        : true;
      const matchesMinBedrooms = criteria.minBedrooms
        ? property.bedrooms >= criteria.minBedrooms
        : true;
      const matchesMaxBedrooms = criteria.maxBedrooms
        ? property.bedrooms <= criteria.maxBedrooms
        : true;
      const matchesDateAdded = criteria.dateAdded
        ? new Date(
            property.added.year,
            new Date(Date.parse(property.added.month + " 1, 2012")).getMonth(),
            property.added.day
          ) >= new Date(criteria.dateAdded)
        : true;
      const matchesPostcode = criteria.postcode
        ? property.location.slice(-3).toLowerCase() ===
          criteria.postcode.toLowerCase()
        : true;
      return (
        matchesType &&
        matchesStatus &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesMinBedrooms &&
        matchesMaxBedrooms &&
        matchesDateAdded &&
        matchesPostcode
      );
    });
    setFilteredProperties(filtered);
  };


  // Function to open the modal with the selected property
  const openModal = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };


  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };


  // Function to scroll to the search results section
  const scrollToSearchResults = () => {
    if (searchResultsRef.current) {
      searchResultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  // Function to scroll to the top content section
  const scrollToTopContent = () => {
    if (topContentRef.current) {
      topContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  // Function to scroll to the footer section
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header
        onResidenciesClick={scrollToSearchResults}
        onGetStartClick={scrollToTopContent}
        onContactUsClick={scrollToFooter}
      />
      <div ref={topContentRef}>
        <TopContent onSearch={handleSearch} />
      </div>
      <AdvanceSearch onAdvancedSearch={handleAdvancedSearch} />
      <div ref={searchResultsRef}>
        <SearchResults
          properties={filteredProperties}
          onViewAll={handleViewAll}
          onImageClick={openModal}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProperty && <DetailsTab property={selectedProperty} />}
      </Modal>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
