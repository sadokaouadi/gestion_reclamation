// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './Redux/store';
import NavScrollExample from './components/navbare';
import Reclamations from './Reclamation/Reclamations';
import ReclamationList from './Reclamation/ReclamationList';
import ChequeForm from './Reclamation/ChequeForm'; // Assure-toi d'importer le nouveau composant

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavScrollExample />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Reclamations />} />
            <Route path="/reclamations" element={<ReclamationList />} />
            <Route path="/cheques" element={<ChequeForm />} /> 
          </Routes>
        </header>
      </div>
    </Provider>
  );
}

export default App;
