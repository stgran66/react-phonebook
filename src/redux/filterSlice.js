import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './constants';

const filterSlice = createSlice({
  name: 'filter',

  initialState: filterInitialState,

  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
