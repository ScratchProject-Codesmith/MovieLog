import React from 'react';
import WatchedList from './WatchedList';
import ToWatchList from './ToWatchList';
import Searchbar from './Searchbar';

function AppContainer() {
  return (
    <div>
      this is the app container
      <Searchbar />
      <section className='appContainer'>
        <ToWatchList />
        <WatchedList />
      </section>
    </div>
  );
}

export default AppContainer;
