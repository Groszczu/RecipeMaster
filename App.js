import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/features/home/components/HomeScreen';
import { Provider } from 'react-redux';
import store from './src/app/store';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerStyle: styles.navigationHeader,
          headerTitleStyle: styles.navigationTitle,
        }}
      >
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{ title: 'RecipeMaster' }}
        />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  navigationHeader: {
    backgroundColor: '#ef4438',
  },
  navigationTitle: {
    color: '#fff',
  },
});
