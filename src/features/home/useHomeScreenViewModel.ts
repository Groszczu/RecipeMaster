import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../user/userSlice';
import { useNavigation } from '@react-navigation/native';
import { getIsLoggedIn, getIsError, getErrorMessage } from '../user/selectors';
import { HomeScreenProps } from './components/HomeScreen/HomeScreen';

const useHomeScreenViewModel = (): HomeScreenProps => {
  const dispatch = useDispatch();
  const logInWithFacebook = () => {
    dispatch(logIn());
  };

  const navigation = useNavigation();
  const navigateToRecipes = () => navigation.navigate('RecipesList');

  const loggedIn = useSelector(getIsLoggedIn);
  const error = useSelector(getIsError);
  const errorMessage = useSelector(getErrorMessage);

  return {
    loggedIn,
    error,
    errorMessage,
    logInWithFacebook,
    navigateToRecipes,
  };
};

export default useHomeScreenViewModel;
