import React from 'react';
import AppContainer from '../components/AppContainer.jsx';
import SearchPage from './SearchPage.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      In the app
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppContainer />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
