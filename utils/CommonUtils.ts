import {Result} from '../store/home/HomeTypes';

/**
 * Finds the object with the lowest fare in an array of flight results.
 * @param results - An array of Result objects.
 * @returns The Result object with the lowest fare, or null if the array is empty.
 */
const getCheapestFlight = (results: Result[]): Result | null => {
  if (results.length === 0) {
    return null;
  }
  return results.reduce((minFlight, currentFlight) => {
    return currentFlight.fare < minFlight.fare ? currentFlight : minFlight;
  }, results[0]);
};

/**
 * Sorts an array of Result objects based on the fare property in ascending order.
 *
 * @param {Result[]} results - An array of Result objects.
 * @returns {Result[]} A new array of Result objects sorted by fare in ascending order.
 */
const sortFlightsByFare = (results: Result[]): Result[] => {
  return results.slice().sort((a, b) => a.fare - b.fare);
};

/**
 * Sorts an array of Result objects based on the stopInfo property.
 * "Non stop" flights will be on top.
 *
 * @param {Result[]} results - An array of Result objects.
 * @returns {Result[]} A new array of Result objects with "Non stop" flights on top.
 */
const sortByStopInfo = (results: Result[]): Result[] => {
  const nonStopFlights = results.filter(flight => {
    const stopInfo = flight.displayData.stopInfo ?? 'Other';
    return stopInfo === 'Non stop';
  });

  const stopFlights = results.filter(flight => {
    const stopInfo = flight.displayData.stopInfo ?? 'Other';
    return stopInfo !== 'Non stop';
  });
  return nonStopFlights.concat(stopFlights);
};

/**
 * Sorts an array of Result objects based on the fare property in ascending order.
 *
 * @param {Result[]} results - An array of Result objects.
 * @returns {Result[]} A new array of Result objects sorted by fare in ascending order.
 */
const sortFlightsByFareDes = (results: Result[]): Result[] => {
  return results.slice().sort((a, b) => b.fare - a.fare);
};

/**
 * Extracts unique airline names from an array of Result objects.
 *
 * @param {Result[]} flights - An array of Result objects.
 * @returns {string[]} An array containing unique airline names.
 */
const extractUniqueAirlines = (flights: Result[]): string[] => {
  const uniqueAirlines: Set<string> = new Set();

  flights.forEach(flight => {
    flight.displayData.airlines.forEach(airline => {
      uniqueAirlines.add(airline.airlineName);
    });
  });

  return Array.from(uniqueAirlines);
};

/**
 * Filters an array of Result objects based on the specified airlineName.
 *
 * @param {Result[]} results - An array of Result objects.
 * @param {string} airlineName - The airline name to filter by.
 * @returns {Result[]} A new array of Result objects filtered by the specified airlineName.
 */
const filterResultsByAirline = (
  results: Result[],
  airlineName: string,
): Result[] => {
  return results.filter(flight =>
    flight.displayData.airlines.some(
      airline => airline.airlineName === airlineName,
    ),
  );
};

export {
  getCheapestFlight,
  sortByStopInfo,
  sortFlightsByFareDes,
  sortFlightsByFare,
  extractUniqueAirlines,
  filterResultsByAirline,
};
