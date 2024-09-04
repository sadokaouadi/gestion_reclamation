// src/redux/reclamationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const reclamationSlice = createSlice({
  name: 'reclamations',
  initialState: [],
  reducers: {
    addReclamation: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addReclamation } = reclamationSlice.actions;

export default reclamationSlice.reducer;
