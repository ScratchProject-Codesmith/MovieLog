import React from 'react';
import AppContainer from '../components/AppContainer.jsx';
import SearchPage from './SearchPage.jsx';
import { Provider } from 'react-redux';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
///import store to use provider.
import store from '../store/store.js'

//wrapped app in provider passing in the store
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/App' element={<AppContainer />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
