import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CameraRollState {
  readonly saved: boolean;
  readonly saving: boolean;
  readonly error: boolean;
  readonly message?: string;
}

interface SaveRequest {
  readonly url: string;
}

interface ErrorResult {
  readonly message: string;
}

const initialState: CameraRollState = {
  saved: false,
  saving: false,
  error: false,
  message: null,
};

const cameraRollSlice = createSlice({
  name: 'cameraRoll',
  initialState,
  reducers: {
    savePicture: (state, action: PayloadAction<SaveRequest>) => ({
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
    savePictureError: (state, action: PayloadAction<ErrorResult>) => ({
      ...state,
      saved: false,
      saving: false,
      error: true,
      message: action.payload.message,
    }),
  },
});

export const { actions } = cameraRollSlice;
export const { savePicture, savePictureSuccessful, savePictureError } = actions;

export default cameraRollSlice.reducer;
