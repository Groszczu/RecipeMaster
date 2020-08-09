import { combineEpics } from 'redux-observable';
import { logInEpic } from '../features/user/userEpic';
import { getRecipesEpic } from '../features/recipes/getRecipesEpic';
import { savePictureEpic } from '../features/cameraRoll/savePictureEpic';

export default combineEpics(logInEpic, getRecipesEpic, savePictureEpic);
