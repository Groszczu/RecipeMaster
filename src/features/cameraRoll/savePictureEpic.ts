import { ofType, Epic } from 'redux-observable';
import {
  savePicture,
  savePictureSuccessful,
  savePictureError,
} from './cameraRollSlice';
import { mergeMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { getIsSaving } from './selectors';
import { RootAction, RootState } from 'app/store';
import Services from 'services';

export const savePictureEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { cameraRoll }) =>
  action$.pipe(
    ofType(savePicture.type),
    withLatestFrom(state$),
    filter(([, state]) => getIsSaving(state)),
    mergeMap(([action]) => cameraRoll.saveRemoteImage(action.payload.url)),
    map((response) => {
      if (!response.error) {
        return savePictureSuccessful();
      }
      return savePictureError({ message: response.message });
    })
  );
