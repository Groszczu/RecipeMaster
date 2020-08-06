import { ofType } from 'redux-observable';
import { flatMap, map, withLatestFrom, switchMap } from 'rxjs/operators';
import {
  logIn,
  logInSuccessful,
  logInError,
  fetchUser,
  fetchUserSuccessful,
  logOut,
} from './userSlice';
import facebook from '../../services/facebook';

export const logInEpic = (action$) =>
  action$.pipe(
    ofType(logIn.type),
    switchMap(() => facebook.logIn()),
    map((response) => {
      if (!response.error) {
          console.log('token', response.token);
        return logInSuccessful({ token: response.token });
      }
      return logInError(response.message);
    })
  );

export const fetchUserEpic = (action$, state$) =>
  action$.pipe(
    ofType(fetchUser.type),
    withLatestFrom(state$.pluck('token')),
    flatMap(([, token]) => facebook.getUserData(token)),
    map((response) => {
        if (!response.error) {
            const { id, name } = response.user;
            return fetchUserSuccessful({ id, name });
        }
    })
  );

export const logOutEpic = (action$) =>
  action$.pipe(
    ofType(logOut.type),
    flatMap(() => facebook.logOut())
  );
