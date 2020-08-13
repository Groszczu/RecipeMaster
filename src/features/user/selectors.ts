import { RootState } from '@app/store';

export const getUserName = (store: RootState) => store.user.user.name;
export const getPicture = (store: RootState) => store.user.user.picture;
export const getIsLoggedIn = (store: RootState) => store.user.loggedIn;
export const getIsError = (store: RootState) => store.user.error;
export const getErrorMessage = (store: RootState) => store.user.message;
