import React, { useState } from "react";

const SearchForm = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-form">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchText}
        placeholder="Enter city"
      />
      <button type="button" onClick={() => props.searchCity(searchText)}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
