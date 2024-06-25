// createAsyncThunk is a utility function provided by Redux Toolkit that generates a thunk action creator with built-in promise lifecycle management. It abstracts away much of the boilerplate involved in writing thunks for asynchronous operations.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action creator using createAsyncThunk
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  }
);

// Slice definition
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
    loading: 'idle',
    error: null
  },
  reducers: {
    // Additional reducers can be defined here if needed
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchData.fulfilled]: (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = 'idle';
      state.error = action.error.message;
    },
  },
});

export default dataSlice.reducer;

// Action creators are generated automatically
export const { } = dataSlice.actions;
