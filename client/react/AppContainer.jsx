import React from 'react';
import WatchedList from './WatchedList';
import ToWatchList from './ToWatchList';

function AppContainer() {
  return (
    <div>
      this is the app container
      <section className='appContainer'>
        <ToWatchList />
        <WatchedList />
      </section>
    </div>
  );
}

export default AppContainer;
