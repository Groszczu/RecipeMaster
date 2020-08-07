import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  name: null,
  picture: null,
  loggedIn: false,
  error: false,
  message: null,
};

const clearError = (state) => ({ ...state, error: false, message: null });

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => clearError(state),
    logInSuccessful: (state, { payload: { id, name, picture } }) => ({
      ...state,
      id,
      name,
      picture,
      loggedIn: true,
      error: false,
      message: null,
    }),
    logInError: (state, { payload }) => ({
      ...state,
      error: true,
      message: payload,
    }),
  },
});

const { actions, reducer } = userSlice;

export const { logIn, logInSuccessful, logInError } = actions;
export default reducer;
