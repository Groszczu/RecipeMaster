import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';

export const createAppStore = (preloadedState) => {
  const epicMiddleware = createEpicMiddleware();

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
