import { createSlice } from '@reduxjs/toolkit';
import { RecipeModel } from './RecipeModel';

export interface RecipesState {
  recipes: RecipeModel[];
  loading: boolean;
  error: boolean;
  message?: string;
}

const initialState: RecipesState = {
  recipes: [] as RecipeModel[],
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

export const { actions } = recipesSlice;

export const { getRecipes, getRecipesSuccessful, getRecipesError } = actions;
export default recipesSlice.reducer;
