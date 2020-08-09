import { useSelector, useDispatch } from 'react-redux';
import { getRecipeById } from './selectors';
import { useRoute } from '@react-navigation/native';
import {
  getIsSaved,
  getIsSaving,
  getIsError,
  getErrorMessage,
} from '../cameraRoll/selectors';
import { savePicture } from '../cameraRoll/cameraRollSlice';

const useRecipeDetailsViewModel = () => {
  const {
    params: { id },
  } = useRoute();
  const recipe = useSelector((state) => getRecipeById(state, id));

  const saved = useSelector(getIsSaved);
  const saving = useSelector(getIsSaving);
  const error = useSelector(getIsError);
  const errorMessage = useSelector(getErrorMessage);

  const dispatch = useDispatch();
  const saveToCameraRoll = (url) => dispatch(savePicture({ url }));

  return {
    recipe,
    saved,
    saving,
    error,
    errorMessage,
    saveToCameraRoll,
  };
};

export default useRecipeDetailsViewModel;
