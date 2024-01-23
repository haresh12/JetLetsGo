import {RootState} from '../store';
import {FlightData} from './HomeTypes';

export const getIsFetching = (state: RootState): boolean =>
  state.flights.isFetching;
export const getIsError = (state: RootState): boolean => state.flights.isError;
export const getFlights = (state: RootState): FlightData | undefined =>
  state.flights.data;
