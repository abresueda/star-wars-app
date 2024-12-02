import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or model..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
