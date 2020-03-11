import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';

import '~/config/ReactotronConfig';

import { store, persistor } from '~/store';

import App from './App';

export default function Index() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
