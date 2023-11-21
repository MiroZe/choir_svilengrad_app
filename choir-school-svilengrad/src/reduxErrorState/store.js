import { configureStore, createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {
    setError: (state, action) => action.payload,
    clearError: () => null,
  },
});

export const { setError, clearError } = errorSlice.actions;

const store = configureStore({
  reducer: {
    error: errorSlice.reducer,
  },
});

export default store;