import { RootState } from '@app/store';

export const getRecipes = (state: RootState) => state.recipes.recipes;
export const getRecipeById = (state: RootState, id: number) =>
  getRecipes(state).find((recipe) => recipe.id === id);
export const getIsLoading = (state: RootState) => state.recipes.loading;
export const getIsError = (state: RootState) => state.recipes.error;
export const getErrorMessage = (state: RootState) => state.recipes.message;
