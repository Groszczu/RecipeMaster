import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import recipesReducer from '../features/recipes/recipesSlice';
import reducer from '../features/cameraRoll/cameraRollSlice';

export default combineReducers({
  user: userReducer,
  recipes: recipesReducer,
  cameraRoll: reducer,
});
