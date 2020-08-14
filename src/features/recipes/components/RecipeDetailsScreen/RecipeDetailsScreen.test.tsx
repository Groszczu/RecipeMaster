import React from 'react';
import { render } from 'testUtils';
import { fireEvent } from '@testing-library/react-native';

import RecipeDetailsScreen, {
  RecipeDetailsScreenProps,
} from './RecipeDetailsScreen';
import { RecipeModel } from '@features/recipes/RecipeModel';

const mockFn = jest.fn();
const mockRecipe: RecipeModel = {
  id: 1,
  title: 'recipe',
  description: '',
  ingredients: [] as string[],
  preparing: [] as string[],
  imgs: [] as string[],
};

const mockProps: RecipeDetailsScreenProps = {
  error: false,
  saving: false,
  saved: false,
  recipe: mockRecipe,
  saveToCameraRoll: mockFn,
};

describe('RecipeDetailsScreen component', () => {
  it('should render', () => {
    render(<RecipeDetailsScreen {...mockProps} />);
  });

  it('should show error message on error', async () => {
    const errorMessage = 'Test error';

    const { getByText } = render(
      <RecipeDetailsScreen {...{ ...mockProps, error: true, errorMessage }} />
    );

    expect(getByText(errorMessage)).toBeTruthy();
  });

  it('should show success message after saving picture', async () => {
    const { getByText } = render(
      <RecipeDetailsScreen {...{ ...mockProps, saved: true }} />
    );

    expect(getByText('Picture saved')).toBeTruthy();
  });

  it('should ask to save the image on image press', async () => {
    const mockRecipeWithImages = {
      ...mockRecipe,
      imgs: ['@images/RecipeMasterLogo.jpg'],
    };
    const { getByText, getByA11yLabel } = render(
      <RecipeDetailsScreen
        {...{ ...mockProps, recipe: mockRecipeWithImages }}
      />
    );

    const recipeImage = getByA11yLabel('recipe image 1');
    fireEvent.press(recipeImage);
    expect(getByText('Save the picture?')).toBeTruthy();
  });

  it('should call saveToCameraRoll with image url on confirming image save', () => {
    const imageUrl = '@images/RecipeMasterLogo.jpg';
    const mockRecipeWithImages = {
      ...mockRecipe,
      imgs: [imageUrl],
    };
    const mockSaveToCameraRoll = jest.fn();

    const { getByText, getByA11yLabel } = render(
      <RecipeDetailsScreen
        {...{ ...mockProps, recipe: mockRecipeWithImages, saveToCameraRoll: mockSaveToCameraRoll }}
      />
    );

    fireEvent.press(getByA11yLabel('recipe image 1'));
    fireEvent.press(getByText('Yes'));
    expect(mockSaveToCameraRoll).toBeCalledWith(imageUrl);
  });
});
