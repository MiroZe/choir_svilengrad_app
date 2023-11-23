import { configureStore, createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {
    setError: (state, action) => action.payload,
    clearError: () => null,
  },
});


const formationSlice = createSlice({
  name: 'formation',
  initialState: null,
  reducers: {
    setFormation: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFormation } = formationSlice.actions;
export const { setError, clearError } = errorSlice.actions;

const store = configureStore({
  reducer: {
    error: errorSlice.reducer,
    formation: formationSlice.reducer,
  },
});

export default store;