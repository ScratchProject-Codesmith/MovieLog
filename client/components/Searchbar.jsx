// This component renders the search bar which allows users to search for movies
// It has an input field and a search button, and calls a function when the search is initiated

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [query, setQuery] = useState(''); // Track the search query
  const navigate = useNavigate();

  // Function to handle search button click
  const handleSearch = () => {
    if (query.trim()) {
      console.log('Search query:', query); // Log the query (can replace with actual API call)
      // Add logic to fetch search results from backend here
      navigate('/search');
    }
  };

  return (
    <div className='searchbar'>
      <input
        type='text'
        placeholder='Search for movies...'
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update search query state as user types
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;
