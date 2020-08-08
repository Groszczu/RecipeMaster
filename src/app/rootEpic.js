import { combineEpics } from 'redux-observable';
import { logInEpic } from '../features/user/userEpic';
import { getRecipesEpic } from '../features/recipes/getRecipesEpic';

export default combineEpics(logInEpic, getRecipesEpic);
