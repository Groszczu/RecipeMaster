import { combineEpics } from 'redux-observable';
import { logInEpic } from '../features/user/userEpic';
import { getRecipesEpic } from '../features/recipes/recipesEpic';

export default combineEpics(logInEpic, getRecipesEpic);
