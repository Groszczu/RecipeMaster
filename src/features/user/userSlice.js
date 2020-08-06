import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  id: null,
  token: null,
  error: false,
  message: null,
};

const clearError = (state) => ({ ...state, error: false, message: null });

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => clearError(state),
    logInSuccessful: (state, { payload: { token } }) => {
      state.token = token;
    },
    logInError: (state, { payload }) => {
      state.error = true;
      state.message = payload;
    },
    fetchUser: (state) => clearError(state),
    fetchUserSuccessful: (state, { payload: { name, id } }) => {
      state.name = name;
      state.id = id;
    },
    logOut: (state) => clearError(state),
    logOutSuccessful: () => initialState,
  },
});

const { actions, reducer } = userSlice;

export const {
  logIn,
  logInSuccessful,
  logInError,
  fetchUser,
  fetchUserSuccessful,
  logOut,
  logOutSuccessful,
} = actions;
export default reducer;
