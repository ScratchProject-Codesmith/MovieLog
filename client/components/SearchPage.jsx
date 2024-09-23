// This component represents the search page where users can input a search query
// and view a list of movies returned from the API.

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Movie from './Movie';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import {
  searchMovieDatabase,
  searchMovies,
  updateSearchQuery,
} from '../reducers/movieSlice';

const SearchPage = () => {
  //const [query, setQuery] = useState(''); // State to track search query
  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const [isLoading, setIsLoading] = useState(false); // State to handle loading state
  const [error, setError] = useState(null); // State to handle error messages

  // Function to handle search input changes

  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update query state
  };

  // Function to handle search button click and API call
  const handleSearch = async () => {
    if (!query.trim()) return; // Prevent empty search

    setIsLoading(true); // Set loading state
    setError(null); // Clear previous errors

    try {
      const response = await fetch(
        `/api/search?query=${encodeURIComponent(query)}`
      );
      if (!response.ok) throw new Error('Failed to fetch search results');

      const data = await response.json();
      setSearchResults(data.moviesWithTitle); // Update search results state
    } catch (err) {
      setError('Unable to fetch search results. Please try again.'); // Set error message
    } finally {
      setIsLoading(false); // Clear loading state
    }
  };

  //Middleware to update movies when query is received
  const listenerMiddleware = createListenerMiddleware();
  const movies = [];
  /*listenerMiddleware.startListening({
    actionCreator: searchMovieDatabase,
    effect: async (action, listnerApi) => {
      console.log('Middleware triggered');
      const results = listnerApi.getState().searchResults;
      if (results) {
        for (let i = 0; i < results.length; i++) {
          movies.push(<Movie />);
        }
      }
    },
  });*/

  useEffect(() => {});

  //Dispatch search for query
  const dispatch = useDispatch();
  const query = useSelector((state) => state.movies.query);
  dispatch(updateSearchQuery(''));
  if (query) {
    dispatch(searchMovies(query))
      .unwrap()
      .then((results) => {
        const items = results.moviesWithTitle.results;
        /*for (let i = 0; i < items.length; i++) {
          movies.push(<Movie />);
          console.log('adding movie');
        }*/
        console.log(items);
        setSearchResults(items);
      });
  }

  for (let i = 0; i < searchResults.length; i++) {
    movies.push(
      <Movie
        title={searchResults[i].original_title}
        description={searchResults[i].overview}
        release={searchResults[i].release_date}
        poster={searchResults[i].poster_path}
      />
    );
    console.log('adding movie');
  }
  /*<div className='search-page'>
      // Page title for the search interface
      <h1>Search for Movies</h1>
      // Search bar area where the user can type their search query
      <div className='searchbar'>
        <input
          type='text'
          placeholder='Search for movies...' // Placeholder text in the search bar input
          value={query}
          onChange={handleInputChange} // Updates query state as the user types
        />
        <button onClick={handleSearch}>Search</button> // Triggers the search on
        click
      </div>
      <div>{movies}</div>
      {isLoading ? (
        // While the app is fetching data, show a "Loading..." message.
        <p>Loading...</p>
      ) : error ? (
        // If an error occurred during the fetch request, display the error message
        <p className='error'>{error}</p>
      ) : (
        // Once the data is fetched and there's no error, display the search results
        <ul className='search-results'>
          {searchResults.length > 0 ? (
            // Map over the search results and display each movie in a list
            searchResults.map((movie) => (
              <li key={movie.id}>
                // Display the movie title
                <h3>{movie.title}</h3>
                // Display a short overview or description of the movie
                <p>{movie.overview}</p>
              </li>
            ))
          ) : (
            // If no results are found for the search query, display a "No results found" message
            <p>No results found</p>
          )}
        </ul>
      )}
    </div>*/
  // JSX structure of the search page. It conditionally renders based on the state of the search
  return <div>{movies}</div>;
};

export default SearchPage;
