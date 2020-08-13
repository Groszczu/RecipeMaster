import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { from, of, Observable } from 'rxjs';
import { mergeMap, catchError, map, mapTo } from 'rxjs/operators';

interface CameraRollResult {
  saved: boolean;
  error: boolean;
  message?: string;
}

export default class CameraRoll {
  _getFileNameFromUrl(url: string): string {
    // get url content after last '/'
    return url.match(/\/([^\/]+)$/)[1] || 'file';
  }

  saveRemoteImage(url: string): Observable<CameraRollResult> {
    return from(MediaLibrary.requestPermissionsAsync()).pipe(
      map(({ granted }) => {
        if (!granted) {
          throw Error('Required permissions are not granted');
        }
        return this._getFileNameFromUrl(url);
      }),
      mergeMap((fileName) =>
        FileSystem.downloadAsync(url, FileSystem.documentDirectory + fileName)
      ),
      mergeMap(({ uri: localUrl }) =>
        MediaLibrary.saveToLibraryAsync(localUrl)
      ),
      mapTo({
        saved: true,
        error: false,
        message: null,
      }),
      catchError((err) =>
        of({
          saved: false,
          error: true,
          message: err.message,
        })
      )
    );
  }
}
