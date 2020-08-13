import { createSlice } from '@reduxjs/toolkit';
import UserModel from './UserModel';

interface UserState {
  user?: UserModel;
  loggedIn: boolean;
  error: boolean;
  message?: string;
}

const initialState: UserState = {
  user: { id: null, name: null, picture: null },
  loggedIn: false,
  error: false,
  message: null,
};

const clearError = (state: UserState): UserState => ({
  ...state,
  error: false,
  message: null,
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => clearError(state),
    logInSuccessful: (state, { payload: { user } }) => ({
      ...state,
      user,
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

export const { actions } = userSlice;

export const { logIn, logInSuccessful, logInError } = actions;
export default userSlice.reducer;
