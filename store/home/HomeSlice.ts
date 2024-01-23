import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {FlightData, Slice} from './HomeTypes';
import {FLIGT_API} from '../../const';

// Initial state for the flight data slice
export const initialState: Slice = {
  data: undefined,
  isFetching: false,
  isError: false,
};

// Create a Redux slice for flight data
const slice = createSlice({
  name: 'flightData',
  initialState,
  reducers: {
    // Redux reducer for setting isFetching to true
    request(state) {
      state.isFetching = true;
    },
    // Redux reducer for successful data retrieval
    success(state, action: PayloadAction<FlightData>) {
      state.isFetching = false;
      state.isError = false;
      state.data = action.payload;
    },
    // Redux reducer for handling failure
    failure(state) {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

// Export the reducer from the slice
export const {reducer} = slice;

// Export individual actions from the slice
export const {request, success, failure} = slice.actions;

// Redux thunk for fetching flight data
export const fetchFlights = () => {
  return async dispatch => {
    dispatch(request());
    try {
      // Fetch flight data using axios
      const {data} = await axios.get(FLIGT_API);
      // Dispatch success action with the retrieved data
      dispatch(success(data));
    } catch (e) {
      // Dispatch failure action on error
      dispatch(failure());
    }
  };
};
