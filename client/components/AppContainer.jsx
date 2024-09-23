import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout as logoutAction } from '../reducers/authSlice';
import { useNavigate } from 'react-router-dom';
import ToWatchList from './ToWatchList';
import WatchedList from './WatchedList';
import Searchbar from './Searchbar';
import { getWatchedMovies } from '../reducers/movieSlice';

const AppContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [watchedMovies, setWatchedMovies] = useState([]);
  useEffect(() => {
    dispatch(getWatchedMovies(user.id))
      .unwrap()
      .then((movies) => {
        console.log(movies);
        setWatchedMovies(movies);
      });
  }, []);

  // Function to handle logout action
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate('/');
  };

  return (
    <div className='app-container'>
      {/* Render the Searchbar component for movie search */}
      <Searchbar />
      {/* Main content section for displaying the movie lists */}
      <div className='app-content'>
        {/* List of movies the user wants to watch (ToWatchList) */}
        <ToWatchList />
        {/* List of movies the user has already watched (WatchedList) */}
        <WatchedList watchedMovies={watchedMovies} />
      </div>
      {/* Button to log the user out */}
      <button className='logout-btn' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AppContainer;
