import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './sass/main.sass';

// ========================
// ROOT INITIALIZATION
// ========================
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// ========================
// APPLICATION RENDER
// ========================
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);