import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import styles from './styles';
import RecipeCard from './RecipeCard';
import shared from '../../../../styles/shared';
import AlertModal from '../../../../components/AlertModal';

const RecipesListScreen = ({
  recipes,
  loading,
  showErrorModal,
  closeErrorModal,
  message,
  fetchRecipes,
  navigateToRecipe,
}) => {
  return (
    <>
      <AlertModal
        visible={showErrorModal}
        onRequestClose={closeErrorModal}
        title={'Failed to fetch recipes'}
        message={message}
      />

      <ScrollView
        style={shared.screenBackground}
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
    </>
  );
};

export default RecipesListScreen;
