import React from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createAppStore } from './app/store';

function render(
  ui: React.ReactElement,
  {
    initialState = {},
    store = createAppStore(initialState),
    ...renderOptions
  } = {}
) {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react-native';
export { render };
