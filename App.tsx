import React from 'react';
import {HomeScreen} from './screens';
import {store} from './store/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
