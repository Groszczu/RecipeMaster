import { createSelector } from '@reduxjs/toolkit';

export const getRecipes = (state) => state.recipes.recipes;
export const getRecipeById = (state, id) =>
  getRecipes(state).find((recipe) => recipe.id === id);
export const getIsLoading = (state) => state.recipes.loading;
export const getIsError = (state) => state.recipes.error;
export const getErrorMessage = (state) => state.recipes.message;
