import React, { useState } from 'react';
import ToWatchList from './ToWatchList';
import WatchedList from './WatchedList';
import Searchbar from './Searchbar';
import Login from './Login';
import Signup from './Signup';

const AppContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in
  const [showSignup, setShowSignup] = useState(false); // State to toggle between login and signup screens

  // Function to simulate login action
  const handleLogin = () => setIsLoggedIn(true);

  // Function to handle logout action
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="app-container">
      // If the user is logged in, display the main app interface
      <>
        // Render the Searchbar component for movie search
        <Searchbar />

        // Main content section for displaying the movie lists
        <section className="app-content">
          // List of movies the user wants to watch (ToWatchList)
          <ToWatchList />

          // List of movies the user has already watched (WatchedList)
          <WatchedList />
        </section>

        // Button to log the user out, which resets the app to the login/signup state
        <button onClick={handleLogout}>Logout</button>
      </>
      )}
    </div>
  );

export default AppContainer;