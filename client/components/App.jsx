import React from 'react';
import AppContainer from '../components/AppContainer.jsx';
import SearchPage from './SearchPage.jsx';
import { Provider } from 'react-redux';
import  Login from './Login.jsx'
import Signup from './Signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      In the app
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/App' element={<AppContainer />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
