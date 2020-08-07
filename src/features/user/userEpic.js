import { ofType } from 'redux-observable';
import { flatMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { logIn, logInSuccessful, logInError } from './userSlice';
import facebook from '../../services/facebook';
import { getIsLoggedIn } from './selectors';

export const logInEpic = (action$, state$) =>
  action$.pipe(
    ofType(logIn.type),
    withLatestFrom(state$),
    filter(([, state]) => !getIsLoggedIn(state)),
    flatMap(() => facebook.logIn()),
    map((response) => {
      if (!response.error) {
        const { id, name, picture } = response.user;
        return logInSuccessful({ id, name, picture });
      }
      return logInError(response.message);
    })
  );
