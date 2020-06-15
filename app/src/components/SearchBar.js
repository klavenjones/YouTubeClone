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
    <div>
      <input type="text" onChange={handleChange} onKeyPress={onKeyPress} />
    </div>
  );
};
