import React from 'react';
import { render } from 'testUtils';

import RecipesListScreen, { RecipesListScreenProps } from './RecipesListScreen';
import { fireEvent } from '@testing-library/react-native';
import { RecipeModel } from '@features/recipes/RecipeModel';

const mockFn = jest.fn();

const mockRecipes: RecipeModel[] = [
  {
    id: 1,
    title: 'recipe',
    description: '',
    ingredients: [] as string[],
    preparing: [] as string[],
    imgs: [] as string[],
  },
];

const mockProps: RecipesListScreenProps = {
  error: false,
  loading: false,
  recipes: mockRecipes,
  fetchRecipes: mockFn,
  navigateToRecipe: mockFn,
};

describe('RecipesListScreen component', () => {
  it('should render', () => {
    render(<RecipesListScreen {...mockProps} />);
  });

  it('should show error message on error', () => {
    const errorMessage = 'Test error';

    const { getByText } = render(
      <RecipesListScreen {...{ ...mockProps, error: true, errorMessage }} />
    );
    expect(getByText(errorMessage)).toBeTruthy();
  });

  it('should navigate to recipe on card press', async () => {
    const mockNavigate = jest.fn();
    const mockRecipeTitle = 'RecipeTitle';
    const mockRecipe = { ...mockRecipes[0], title: mockRecipeTitle };

    const { getByText } = render(
      <RecipesListScreen
        {...{
          ...mockProps,
          recipes: [mockRecipe],
          navigateToRecipe: mockNavigate,
        }}
      />
    );

    fireEvent.press(getByText(mockRecipeTitle));
    expect(mockNavigate).toHaveBeenCalledWith(mockRecipe);
  });
});
