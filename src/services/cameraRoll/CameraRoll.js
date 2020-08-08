import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { from, of } from 'rxjs';
import { flatMap, mergeMap, catchError, map, mapTo } from 'rxjs/operators';

export default class CameraRoll {
  _getFileNameFromUrl(url) {
    // get url content after last '/'
    return url.match(/\/([^\/]+)$/)[1] || 'file';
  }

  saveRemoteImage(url) {
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
