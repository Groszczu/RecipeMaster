import * as FacebookApi from 'expo-facebook';
import { catchError, flatMap, map } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const AppID = '347107810025882';

class Facebook {
  _token = '';
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
        if (type !== 'success') {
          throw Error('Unknown error');
        }

        return { error: false, message: null, token };
      }),
      catchError((err) =>
        of({ error: true, message: err.toString(), token: null })
      )
    );
  }

  getUserData(token) {
    const url = `https://graph.facebook.com/me?fields=id,name&access_token=${token}`;

    return fromFetch(url, {
      selector: async (response) => {
        if (response.ok) {
          return {
            error: false,
            message: null,
            user: await response.json(),
          };
        }
        throw Error(await response.text());
      },
    }).pipe(
      catchError((err) => ({
        error: true,
        message: err.toString(),
        user: null,
      }))
    );
  }
}

export default new Facebook();
