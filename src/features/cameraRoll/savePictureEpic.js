import { ofType } from 'redux-observable';
import {
  savePicture,
  savePictureSuccessful,
  savePictureError,
} from './cameraRollSlice';
import { mergeMap, map, withLatestFrom, filter } from 'rxjs/operators';
import cameraRoll from '../../services/cameraRoll';
import { getIsSaving } from './selectors';

export const savePictureEpic = (action$, state$) =>
  action$.pipe(
    ofType(savePicture.type),
    withLatestFrom(state$),
    filter(([, state]) => getIsSaving(state)),
    mergeMap(([action]) => cameraRoll.saveRemoteImage(action.payload.url)),
    map((response) => {
      if (!response.error) {
        return savePictureSuccessful();
      }
      return savePictureError();
    })
  );
