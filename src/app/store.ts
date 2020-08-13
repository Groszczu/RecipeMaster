import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { createEpicMiddleware } from 'redux-observable';
import { actions as cameraRollActions } from 'features/cameraRoll/cameraRollSlice';
import { actions as recipesActions } from 'features/recipes/recipesSlice';
import { actions as userActions } from 'features/user/userSlice';
import rootEpic from './rootEpic';
import { ActionType } from 'typesafe-actions';
import Services, { appServices } from '../services';

export type RootAction = ActionType<
  typeof cameraRollActions & typeof recipesActions & typeof userActions
>;
export type RootState = ReturnType<typeof rootReducer>;

export const createAppStore = (preloadedState = {}) => {
  const epicMiddleware = createEpicMiddleware<
    RootAction,
    RootAction,
    RootState,
    Services
  >({
    dependencies: appServices,
  });

  const store = configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: getDefaultMiddleware().concat(epicMiddleware),
  });

  epicMiddleware.run(rootEpic);

  return store;
};

const store = createAppStore();

export default store;
