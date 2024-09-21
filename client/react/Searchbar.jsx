import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Searchbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <form id='searchBar'>
        <label htmlFor='searchField'>Search for movies: </label>
        <input type='text' id='searchField' name='searchField'></input>
        <input type='submit' value='Search' id='submitButton'></input>
      </form>
    </div>
  );
}

export default Searchbar;
