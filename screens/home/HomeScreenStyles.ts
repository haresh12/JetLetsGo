import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
  sortOptionsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  sortOption: {
    fontSize: 16,
    color: '#333',
  },
  selectedSortOption: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
  resultContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  fliter: {
    height: 32,
    width: 32,
    position: 'absolute',
    top: 40,
    right: 20,
  },
  listContainer: {
    marginTop: 10,
    marginBottom: 50,
  },
  listAirlines: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  airlineCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  airlineName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default styles;
