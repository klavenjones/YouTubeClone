import React, { useState } from "react";

export const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => setSearchTerm(e.target.value);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search__input u-full-width"
        type="text"
        onChange={handleChange}
        onKeyPress={onKeyPress}
        placeholder="Search Videos"
      />
      <button
        onClick={() => onSubmit(onSubmit(searchTerm))}
        className="search__button"
      >
        Search
      </button>
    </div>
  );
};
