import React from 'react';
import { render } from '~/testUtils';
import { fireEvent } from '@testing-library/react-native';

import RecipeDetailsScreen from './RecipeDetailsScreen';

const mockFn = jest.fn();
const mockRecipe = {
  title: 'recipe',
  ingredients: [],
  preparing: [],
  imgs: [],
};

describe('RecipeDetailsScreen component', () => {
  it('should render', () => {
    render(
      <RecipeDetailsScreen recipe={mockRecipe} saveToCameraRoll={mockFn} />
    );
  });

  it('should show error message on error', async () => {
    const errorMessage = 'Test error';

    const { getByText } = render(
      <RecipeDetailsScreen
        recipe={mockRecipe}
        error={true}
        errorMessage={errorMessage}
        saveToCameraRoll={mockFn}
      />
    );

    expect(getByText(errorMessage)).toBeTruthy();
  });

  it('should show success message after saving picture', async () => {
    const { getByText } = render(
      <RecipeDetailsScreen
        recipe={mockRecipe}
        saved={true}
        saveToCameraRoll={mockFn}
      />
    );

    expect(getByText('Picture saved')).toBeTruthy();
  });

  it('should ask to save the image on image press', async () => {
    const mockRecipeWithImages = {
      ...mockRecipe,
      imgs: ['~/images/RecipeMasterLogo.jpg'],
    };
    const { getByText, getByA11yLabel } = render(
      <RecipeDetailsScreen
        recipe={mockRecipeWithImages}
        saveToCameraRoll={mockFn}
      />
    );

    const recipeImage = getByA11yLabel('recipe image 1');
    fireEvent.press(recipeImage);
    expect(getByText('Save the picture?')).toBeTruthy();
  });

  it('should call saveToCameraRoll with image url on confirming image save', () => {
    const imageUrl = '~/images/RecipeMasterLogo.jpg';
    const mockRecipeWithImages = {
      ...mockRecipe,
      imgs: [imageUrl],
    };
    const mockSaveToCameraRoll = jest.fn();

    const { getByText, getByA11yLabel } = render(
      <RecipeDetailsScreen
        recipe={mockRecipeWithImages}
        saveToCameraRoll={mockSaveToCameraRoll}
      />
    );

    fireEvent.press(getByA11yLabel('recipe image 1'));
    fireEvent.press(getByText('Yes'));
    expect(mockSaveToCameraRoll).toBeCalledWith(imageUrl);
  });
});
