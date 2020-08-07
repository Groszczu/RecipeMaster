import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../user/userSlice';
import { useNavigation } from '@react-navigation/native';
import { getIsLoggedIn, getIsError, getErrorMessage } from '../user/selectors';

const useHomeScreenViewModel = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((value) => !value);
  const closeDropdown = () => dropdownOpen && setDropdownOpen(false);

  const dispatch = useDispatch();
  const logInWithFacebook = () => dispatch(logIn());

  const navigation = useNavigation();
  const navigateToRecipes = () => navigation.navigate('Recipes');

  const loggedIn = useSelector(getIsLoggedIn);
  const error = useSelector(getIsError);
  const errorMessage = useSelector(getErrorMessage);

  return {
    dropdownOpen,
    toggleDropdown,
    closeDropdown,
    loggedIn,
    error,
    errorMessage,
    logInWithFacebook,
    navigateToRecipes,
  };
};

export default useHomeScreenViewModel;
