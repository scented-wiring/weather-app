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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.searchCity(searchText);
          }
        }}
      />
      <button type="button" onClick={() => props.searchCity(searchText)}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
