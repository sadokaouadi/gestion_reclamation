// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import reclamationReducer from './reclamationSlice';

const store = configureStore({
  reducer: {
    reclamations: reclamationReducer,
  },
});

export default store;
