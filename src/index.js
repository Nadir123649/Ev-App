import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/index.css"
import App from './App';
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();

reportWebVitals();
