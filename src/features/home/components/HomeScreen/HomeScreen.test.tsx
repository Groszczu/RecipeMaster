import React from 'react';
import { render } from 'testUtils';
import HomeScreen, { HomeScreenProps } from './HomeScreen';

const mockFn = jest.fn();
const mockProps: HomeScreenProps = {
  loggedIn: false,
  error: false,
  navigateToRecipes: mockFn,
  logInWithFacebook: mockFn,
};

describe('HomeScreen component', () => {
  it('should render', () => {
    render(<HomeScreen {...mockProps} />);
  });

  it('should show error message on error', async () => {
    const errorMessage = 'Test error';

    const { getByText } = render(
      <HomeScreen {...{ ...mockProps, error: true, errorMessage }} />
    );

    expect(getByText(errorMessage)).toBeTruthy();
  });

  it('should show logged in message', async () => {
    const { getByText } = render(
      <HomeScreen {...{ ...mockProps, loggedIn: true }} />
    );

    expect(getByText('Logged in successfully')).toBeTruthy();
  });
});
