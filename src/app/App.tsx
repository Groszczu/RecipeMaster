import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';

import store from './store';
import AppNavigator from './AppNavigator';

function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      <StatusBar style='auto' />
    </Provider>
  );
}

export default registerRootComponent(App);
