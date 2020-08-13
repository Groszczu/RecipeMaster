import { RootState } from '@app/store';

export const getIsSaved = (state: RootState) => state.cameraRoll.saved;
export const getIsSaving = (state: RootState) => state.cameraRoll.saving;
export const getIsError = (state: RootState) => state.cameraRoll.error;
export const getErrorMessage = (state: RootState) => state.cameraRoll.message;
