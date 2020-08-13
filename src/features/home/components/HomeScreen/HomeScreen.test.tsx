import React from 'react';
import { render } from 'testUtils';
import HomeScreen from './HomeScreen';

const mockFn = jest.fn();

describe('HomeScreen component', () => {
  it('should render', () => {
    render(
      <HomeScreen navigateToRecipes={mockFn} logInWithFacebook={mockFn} />
    );
  });

  it('should show error message on error', async () => {
    const errorMessage = 'Test error';

    const { getByText } = render(
      <HomeScreen
        error={true}
        errorMessage={errorMessage}
        navigateToRecipes={mockFn}
        logInWithFacebook={mockFn}
      />
    );

    expect(getByText(errorMessage)).toBeTruthy();
  });

  it('should show logged in message', async () => {
    const { getByText } = render(
      <HomeScreen
        loggedIn={true}
        navigateToRecipes={mockFn}
        logInWithFacebook={mockFn}
      />
    );

    expect(getByText('Logged in successfully')).toBeTruthy();
  });
});
