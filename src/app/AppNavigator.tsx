import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

import LoggedUserFooter from '@features/user/components/LoggedUserFooter';
import HomeScreen from '@features/home/components/HomeScreen';
import RecipesListScreen from '@features/recipes/components/RecipesListScreen';
import RecipeDetailsScreen from '@features/recipes/components/RecipeDetailsScreen';

import colors from '@styles/colors';
import { HEADER_HIGHT } from '@styles/shared';
import { verticalScale } from '@styles/scale';

type RootStackParamList = {
  Home: undefined;
  RecipesList: undefined;
  RecipeDetails: { id: number; title: string };
};

export type RecipeDetailsProps = RouteProp<RootStackParamList, 'RecipeDetails'>;

const Stack = createStackNavigator<RootStackParamList>();
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
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
      </View>
    </NavigationContainer>
  );
};

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

export default AppNavigator;
