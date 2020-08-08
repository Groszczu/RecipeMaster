import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../user/userSlice';
import { useNavigation } from '@react-navigation/native';
import { getIsLoggedIn, getIsError, getErrorMessage } from '../user/selectors';
import useModalState from '../../hooks/useModalState';

const useHomeScreenViewModel = () => {
  const [fabOpen, setFabOpen] = useState(false);
  const toggleFab = () => setFabOpen((value) => !value);
  const closeFab = () => fabOpen && setFabOpen(false);

  const dispatch = useDispatch();
  const logInWithFacebook = () => dispatch(logIn());

  const navigation = useNavigation();
  const navigateToRecipes = () => navigation.navigate('Recipes');

  const loggedIn = useSelector(getIsLoggedIn);
  const error = useSelector(getIsError);
  const errorMessage = useSelector(getErrorMessage);

  const [showErrorModal, closeErrorModal] = useModalState(error);
  const [showLoggedInModal, closeLoggedInModal] = useModalState(loggedIn);

  return {
    fabOpen,
    toggleFab,
    closeFab,
    loggedIn,
    errorMessage,
    logInWithFacebook,
    navigateToRecipes,
    showLoggedInModal,
    closeLoggedInModal,
    showErrorModal,
    closeErrorModal,
  };
};

export default useHomeScreenViewModel;
