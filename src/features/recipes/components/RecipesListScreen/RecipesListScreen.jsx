import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import useRecipesViewModel from '../../useRecipesViewModel';
import styles from './styles';
import useErrorAlert from '../../../../hooks/useErrorAlert';
import RecipeCard from './RecipeCard';

const RecipesListScreen = () => {
  const {
    recipes,
    loading,
    error,
    message,
    fetchRecipes,
    navigateToRecipe,
  } = useRecipesViewModel();

  useErrorAlert(error, 'Error', message);

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetchRecipes} />
      }
    >
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onPress={() => navigateToRecipe(recipe)}
        />
      ))}
    </ScrollView>
  );
};

export default RecipesListScreen;
