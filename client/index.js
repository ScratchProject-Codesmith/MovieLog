import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './react/App.jsx';

import styles from './styles.css';

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
