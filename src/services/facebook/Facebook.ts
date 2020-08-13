import * as FacebookApi from 'expo-facebook';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import Constants from 'expo-constants';
import UserModel from '@features/user/UserModel';

const AppId = Constants.manifest.facebookAppId;

interface LoginResult {
  error: boolean;
  message?: string;
  user?: UserModel;
}

class Facebook {
  logIn(): Observable<LoginResult> {
    return from(FacebookApi.initializeAsync(AppId)).pipe(
      mergeMap(() =>
        FacebookApi.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        })
      ),
      map((response) => {
        if (response.type === 'cancel') {
          throw Error('Login canceled');
        }
        const { token } = response;

        return token;
      }),
      switchMap((token) =>
        this._getUserData(token).pipe(
          map((user: UserModel) => ({
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

  _getUserData(token: string) {
    const url = `https://graph.facebook.com/me?fields=id,name,picture&access_token=${token}`;

    return ajax.getJSON(url);
  }
}

export default Facebook;
