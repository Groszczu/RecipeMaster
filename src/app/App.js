import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';

import store from './store';
import colors from '~/styles/colors';
import HomeScreen from '~/features/home/components/HomeScreen';
import RecipesListScreen from '~/features/recipes/components/RecipesListScreen';
import RecipeDetailsScreen from '~/features/recipes/components/RecipeDetailsScreen';
import LoggedUserFooter from '~/features/user/components/LoggedUserFooter';
import { verticalScale } from '~/styles/scale';
import { HEADER_HIGHT } from '~/styles/shared';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
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
          <Stack.Screen name={'RecipesList'} component={RecipesListScreen} />
          <Stack.Screen
            name={'RecipeDetails'}
            component={RecipeDetailsScreen}
            options={({ route }) => ({
              title: `${route.params.title} Recipe!`,
            })}
          />
        </Stack.Navigator>
        <LoggedUserFooter />
        <StatusBar style='auto' />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  navigationHeader: {
    backgroundColor: colors.primary,
    height: HEADER_HIGHT,
  },
  navigationTitle: {
    color: colors.text.white,
    fontSize: verticalScale(18),
  },
});

export default registerRootComponent(App);
