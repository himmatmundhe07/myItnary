import { createSlice } from '@reduxjs/toolkit';

const tripSlice = createSlice({
  name: 'trip',
  initialState: {
    currentTrip: null,
    loading: false,
    error: null,
  },
  reducers: {
    setTripStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    setTripSuccess: (state, action) => {
      state.loading = false;
      state.currentTrip = action.payload;
    },
    setTripFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearTrip: (state) => {
      state.currentTrip = null;
    }
  },
});

export const { setTripStart, setTripSuccess, setTripFailure, clearTrip } = tripSlice.actions;
export default tripSlice.reducer;
