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
import useModalState from '../../hooks/useModalState';

const useRecipesViewModel = () => {
  const recipes = useSelector(getRecipes);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getIsError);
  const message = useSelector(getErrorMessage);

  const dispatch = useDispatch();

  const [showErrorModal, closeErrorModal] = useModalState(error);

  const fetchRecipes = () => dispatch(getRecipesAction());
  const navigation = useNavigation();
  const navigateToRecipe = (recipe) =>
    navigation.navigate('Recipe', { id: recipe.id, title: recipe.title });

  useEffect(() => {
    fetchRecipes();
  }, []);

  return {
    recipes,
    loading,
    showErrorModal,
    closeErrorModal,
    message,
    fetchRecipes,
    navigateToRecipe,
  };
};

export default useRecipesViewModel;
