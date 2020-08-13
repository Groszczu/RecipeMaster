import { ofType, Epic } from 'redux-observable';
import { map, withLatestFrom, filter, mergeMapTo } from 'rxjs/operators';
import { logIn, logInSuccessful, logInError } from './userSlice';
import { getIsLoggedIn } from './selectors';
import { RootAction, RootState } from 'app/store';
import Services from 'services';

export const logInEpic: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { facebook }
) =>
  action$.pipe(
    ofType(logIn.type),
    withLatestFrom(state$),
    filter(([, state]) => !getIsLoggedIn(state)),
    mergeMapTo(facebook.logIn()),
    map((response) => {
      if (!response.error) {
        const { user } = response;
        return logInSuccessful({ user });
      }
      return logInError(response.message);
    })
  );
