import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';

import styles from './styles.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
