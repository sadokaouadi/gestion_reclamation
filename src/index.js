// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importez BrowserRouter
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Enveloppez App avec BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
