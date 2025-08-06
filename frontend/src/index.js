import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';  // Add .js extension here
import './styles.css';



// Ensure the root element exists in your HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>


);

