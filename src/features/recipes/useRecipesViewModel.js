import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes as getRecipesAction } from './recipesSlice';
import {
  getRecipes,
  getIsLoading,
  getIsError,
  getErrorMessage,
} from './selectors';
import { useNavigation } from '@react-navigation/native';

const useRecipesViewModel = () => {
  const recipes = useSelector(getRecipes);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getIsError);
  const message = useSelector(getErrorMessage);

  const dispatch = useDispatch();

  const fetchRecipes = () => dispatch(getRecipesAction());
  const navigation = useNavigation();
  const navigateToRecipe = (recipe) => navigation.navigate('Recipe', recipe);

  useEffect(() => {
    fetchRecipes();
  }, []);

  return { recipes, loading, error, message, fetchRecipes, navigateToRecipe };
};

export default useRecipesViewModel;
