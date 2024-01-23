import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './HomeScreenStyles';
import useFlights from './useFlights';
import {
  sortFlightsByFare,
  sortByStopInfo,
  sortFlightsByFareDes,
  extractUniqueAirlines,
  filterResultsByAirline,
} from './../../utils';

const HomeScreen = () => {
  const {flights} = useFlights();
  const initialResults = flights?.data?.result ?? [];
  const [selectedSortOption, setSelectedSortOption] = useState();
  const [sortedResults, setSortedResults] = useState(
    sortFlightsByFare(initialResults),
  );

  useEffect(() => {
    if (initialResults) {
      handleSort('cheapest');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialResults.length]);

  const handleSort = sortOption => {
    setSelectedSortOption(sortOption);

    switch (sortOption) {
      case 'cheapest':
        setSortedResults(sortFlightsByFare(initialResults));
        break;
      case 'nonStop':
        setSortedResults(sortByStopInfo(initialResults));
        break;
      case 'businessClass':
        setSortedResults(sortFlightsByFareDes(initialResults));
        break;
      default:
        break;
    }
  };

  const renderItem = ({item}) => {
    // Extract important data from each item
    const {
      displayData: {stopInfo, totalDuration, airlines},
      fare,
      id,
    } = item;

    return (
      <View style={styles.resultContainer}>
        <Text>{`ID: ${id}`}</Text>
        <Text>{`Stop Info: ${stopInfo}`}</Text>
        <Text>{`Total Duration: ${totalDuration}`}</Text>
        <Text>{`Fare: ${fare}`}</Text>
        <Text>{`Fare: ${airlines[0].airlineName}`}</Text>
      </View>
    );
  };

  const renderAirlineCard = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.airlineCard}
        onPress={() => {
          console.log('item', item);
          setSortedResults(filterResultsByAirline(initialResults, item));
        }}>
        <Text style={styles.airlineName}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sortOptionsContainer}>
        <TouchableOpacity onPress={() => handleSort('cheapest')}>
          <Text
            style={
              selectedSortOption === 'cheapest'
                ? styles.selectedSortOption
                : styles.sortOption
            }>
            Cheapest
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSort('nonStop')}>
          <Text
            style={
              selectedSortOption === 'nonStop'
                ? styles.selectedSortOption
                : styles.sortOption
            }>
            Non-Stop
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSort('businessClass')}>
          <Text
            style={
              selectedSortOption === 'businessClass'
                ? styles.selectedSortOption
                : styles.sortOption
            }>
            Business Class
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={extractUniqueAirlines(initialResults)}
        keyExtractor={item => item}
        horizontal
        style={styles.listAirlines}
        renderItem={renderAirlineCard}
      />

      <FlatList
        data={sortedResults}
        style={styles.listContainer}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No flights available.</Text>}
      />
    </View>
  );
};

export default HomeScreen;
