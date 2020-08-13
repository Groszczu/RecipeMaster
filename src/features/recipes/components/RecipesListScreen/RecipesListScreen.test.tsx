import React from 'react';
import { render } from 'testUtils';

import RecipesListScreen from './RecipesListScreen';
import { fireEvent } from '@testing-library/react-native';

const mockFn = jest.fn();
const mockRecipes = [
  {
    id: 1,
    title: 'RecipeTitle',
    description: '',
    ingredients: [],
    preparing: [],
    imgs: [],
  },
];

describe('RecipesListScreen component', () => {
  it('should render', () => {
    render(
      <RecipesListScreen
        recipes={mockRecipes}
        fetchRecipes={mockFn}
        navigateToRecipe={mockFn}
      />
    );
  });

  it('should show error message on error', () => {
    const errorMessage = 'Test error';

    const { getByText } = render(
      <RecipesListScreen
        recipes={mockRecipes}
        error={true}
        errorMessage={errorMessage}
        fetchRecipes={mockFn}
        navigateToRecipe={mockFn}
      />
    );
    expect(getByText(errorMessage)).toBeTruthy();
  });

  it('should navigate to recipe on card press', async () => {
    const mockNavigate = jest.fn();
    const mockRecipeTitle = 'RecipeTitle';
    const mockRecipe = { ...mockRecipes[0], title: mockRecipeTitle };

    const { getByText } = render(
      <RecipesListScreen
        recipes={[mockRecipe]}
        fetchRecipes={mockFn}
        navigateToRecipe={mockNavigate}
      />
    );

    fireEvent.press(getByText(mockRecipeTitle));
    expect(mockNavigate).toHaveBeenCalledWith(mockRecipe);
  });
});
