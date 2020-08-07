import * as FacebookApi from 'expo-facebook';
import { catchError, flatMap, map } from 'rxjs/operators';
import { of, from } from 'rxjs';
import Constants from 'expo-constants';

const AppID = Constants.manifest.facebookAppId;

class Facebook {
  logIn() {
    return from(FacebookApi.initializeAsync(AppID)).pipe(
      flatMap(() =>
        FacebookApi.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        })
      ),
      map(({ type, token }) => {
        if (type === 'cancel') {
          throw Error('Log in canceled');
        }
        if (type !== 'success' || !token) {
          throw Error('Unknown error');
        }

        return token;
      }),
      flatMap((token) => this._getUserData(token)),
      flatMap((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error('Failed to fetch user data');
      }),
      map((user) => ({
        error: false,
        message: null,
        user,
      })),
      catchError((err) => of({ error: true, message: err.message, user: null }))
    );
  }

  _getUserData(token) {
    const url = `https://graph.facebook.com/me?fields=id,name,picture&access_token=${token}`;

    return fetch(url);
  }
}

export default Facebook;
