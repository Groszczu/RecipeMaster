import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getRecipes as getRecipesAction } from './recipesSlice';
import {
  getRecipes,
  getIsLoading,
  getIsError,
  getErrorMessage,
} from './selectors';

const useRecipesViewModel = () => {
  const recipes = useSelector(getRecipes);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getIsError);
  const errorMessage = useSelector(getErrorMessage);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const fetchRecipes = () => dispatch(getRecipesAction());
  const navigateToRecipe = (recipe) =>
    navigation.navigate('Recipe', { id: recipe.id, title: recipe.title });

  useEffect(() => {
    fetchRecipes();
  }, []);

  return {
    recipes,
    loading,
    error,
    errorMessage,
    fetchRecipes,
    navigateToRecipe,
  };
};

export default useRecipesViewModel;
