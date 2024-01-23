import {useDispatch, useSelector} from 'react-redux';
import {
  getFlights,
  getIsError,
  getIsFetching,
} from '../../store/home/HomeSelector';
import {useEffect} from 'react';
import {fetchFlights} from '../../store/home/HomeSlice';

const useFlights = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetching);
  const isError = useSelector(getIsError);
  const flights = useSelector(getFlights);

  useEffect(() => {
    dispatch(fetchFlights());
  }, []);

  return {
    isFetching,
    isError,
    flights,
  };
};

export default useFlights;
