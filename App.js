import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/features/home/components/HomeScreen';
import { Provider } from 'react-redux';
import store from './src/app/store';
import colors, { primary } from './src/styles/colors';
import RecipesListScreen from './src/features/recipes/components/RecipesListScreen/RecipesListScreen';
import LoggedUserFooter from './src/features/user/components/LoggedUserFooter';
import RecipeScreen from './src/features/recipes/components/RecipeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerStyle: styles.navigationHeader,
          headerTitleStyle: styles.navigationTitle,
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{ title: 'RecipeMaster' }}
        />
        <Stack.Screen name={'Recipes'} component={RecipesListScreen} />
        <Stack.Screen
          name={'Recipe'}
          component={RecipeScreen}
          options={({ route }) => ({ title: `${route.params.title} Recipe!` })}
        />
      </Stack.Navigator>
      <LoggedUserFooter />
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
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  navigationHeader: {
    backgroundColor: colors.primary,
  },
  navigationTitle: {
    color: colors.text.white,
  },
});
