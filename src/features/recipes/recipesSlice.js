import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
  loading: false,
  error: false,
  message: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    getRecipes: (state) => ({
      ...state,
      loading: true,
      error: false,
      message: null,
    }),
    getRecipesSuccessful: (state, { payload: { recipes } }) => ({
      ...state,
      recipes,
      loading: false,
      error: false,
      message: null,
    }),
    getRecipesError: (state, { payload }) => ({
      ...state,
      loading: false,
      error: true,
      message: payload,
    }),
  },
});

const { actions, reducer } = recipesSlice;

export const { getRecipes, getRecipesSuccessful, getRecipesError } = actions;
export default reducer;
