// This component renders the search bar which allows users to search for movies
// It has an input field and a search button, and calls a function when the search is initiated

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  searchMovieDatabase,
  searchMovies,
  updateSearchQuery,
} from '../reducers/movieSlice';

const Searchbar = () => {
  const [query, setQuery] = useState(''); // Track the search query
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to handle search button click
  const handleSearch = () => {
    if (query.trim()) {
      // Add logic to fetch search results from backend here
      /*dispatch(searchMovies(query))
        .unwrap()
        .then((result) => dispatch(searchMovieDatabase(result)));*/
      dispatch(updateSearchQuery(query));
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
