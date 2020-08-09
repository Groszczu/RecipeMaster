import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saved: false,
  saving: false,
  error: false,
  message: null,
};

const cameraRollSlice = createSlice({
  name: 'cameraRoll',
  initialState,
  reducers: {
    savePicture: (state) => ({
      ...state,
      saved: false,
      saving: true,
      error: false,
      message: null,
    }),
    savePictureSuccessful: (state) => ({
      ...state,
      saved: true,
      saving: false,
      error: false,
      message: null,
    }),
    savePictureError: (state, { payload }) => ({
      ...state,
      saved: false,
      saving: false,
      error: true,
      message: payload,
    }),
  },
});

const { actions, reducer } = cameraRollSlice;

export const { savePicture, savePictureSuccessful, savePictureError } = actions;
export default reducer;
