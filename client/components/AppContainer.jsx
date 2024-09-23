import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout as logoutAction } from '../reducers/authSlice';
import { useNavigate } from 'react-router-dom';
import ToWatchList from './ToWatchList';
import WatchedList from './WatchedList';
import Searchbar from './Searchbar';
// import Login from './Login';
// import Signup from './Signup';

const AppContainer = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //const user = useSelector((state) => state.auth.user); // Get user from Redux store
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in
  // const [showSignup, setShowSignup] = useState(false); // State to toggle between login and signup screens

  // Function to simulate login action
  //const handleLogin = () => setIsLoggedIn(true);

  // Function to handle logout action
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate('/');
    };

  return (
    <div className='app-container'>
      <>
        // Render the Searchbar component for movie search
        <Searchbar />
        // Main content section for displaying the movie lists
        <section className='app-content'>
          // List of movies the user wants to watch (ToWatchList)
          <ToWatchList />
          // List of movies the user has already watched (WatchedList)
          <WatchedList />
        </section>
        // Button to log the user out, which resets the app to the login/signup
        state
        <button onClick={handleLogout}>Logout</button>
      </>
    </div>
  );
};

export default AppContainer;
