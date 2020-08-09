import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, RefreshControl } from 'react-native';
import styles from './styles';
import RecipeCard from './RecipeCard';
import shared from '~/styles/shared';
import AlertModal from '~/components/AlertModal';
import useModalState from '~/hooks/useModalState';

const RecipesListScreen = ({
  recipes,
  loading,
  error,
  errorMessage,
  fetchRecipes,
  navigateToRecipe,
}) => {
  const [showErrorModal, closeErrorModal] = useModalState(error);

  return (
    <>
      <AlertModal
        visible={showErrorModal}
        onRequestClose={closeErrorModal}
        title={'Failed to fetch recipes'}
        message={errorMessage}
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

RecipesListScreen.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,

  loading: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,

  fetchRecipes: PropTypes.func.isRequired,
  navigateToRecipe: PropTypes.func.isRequired,
};

export default RecipesListScreen;
