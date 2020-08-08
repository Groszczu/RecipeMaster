import * as FacebookApi from 'expo-facebook';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import Constants from 'expo-constants';

const AppId = Constants.manifest.facebookAppId;

class Facebook {
  logIn() {
    return from(FacebookApi.initializeAsync(AppId)).pipe(
      mergeMap(() =>
        FacebookApi.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        })
      ),
      map(({ type, token }) => {
        if (type === 'cancel') {
          throw Error('Login canceled');
        }
        if (type !== 'success' || !token) {
          throw Error('Unknown error');
        }

        return token;
      }),
      switchMap((token) =>
        this._getUserData(token).pipe(
          map((user) => ({
            error: false,
            message: null,
            user,
          })),
          catchError(() =>
            of({
              error: true,
              message: 'Failed to fetch user data',
              user: null,
            })
          )
        )
      ),
      catchError((err) => of({ error: true, message: err.message, user: null }))
    );
  }

  _getUserData(token) {
    const url = `https://graph.facebook.com/me?fields=id,name,picture&access_token=${token}`;

    return ajax.getJSON(url);
  }
}

export default Facebook;
