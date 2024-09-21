import React from 'react';
import AppContainer from '../components/AppContainer.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      In the app
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
