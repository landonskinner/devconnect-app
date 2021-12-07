import React, { useState } from 'react';


function SearchBar({ onSearch }) {
    const [currentSearch, setCurrentSearch] = useState("");
    function handleSubmit(e) {
      e.preventDefault();
      onSearch(currentSearch);
    }
  
    return (
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search posts"
          value={currentSearch}
          onChange={(e) => setCurrentSearch(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    );
  }
  
  export default SearchBar;