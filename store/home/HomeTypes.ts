/**
 * Represents the display data within each result object.
 */
interface DisplayData {
  source: {
    cityCode: string;
    cityName: string;
    terminal: number;
    airportCode: string;
    airportName: string;
    countryCode: string;
    countryName: string;
  };
  depTime: string;
  airlines: [
    {
      airlineCode: string;
      airlineName: string;
      flightNumber: string;
      stopInfo: string;
    },
  ];
  destination: {
    cityCode: string;
    cityName: string;
    terminal: number;
    airportCode: string;
    airportName: string;
    countryCode: string;
    countryName: string;
  };
  arrTime: string;
  stopInfo?: string;
  totalDuration: string;
}

/**
 * Represents an individual result object.
 */
export interface Result {
  id: number;
  fare: number;
  displayData: DisplayData;
}

/**
 * Represents the data property in the API response.
 */
interface Data {
  result: Result[];
}

/**
 * Represents the entire API response structure.
 */
export interface FlightData {
  data: Data;
  message: string;
}

/**
 * Represent all the possible states.
 */
export interface Slice {
  data: FlightData | undefined;
  isFetching: boolean;
  isError: boolean;
}
