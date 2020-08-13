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
import { RecipeDetailsProps } from 'app/AppNavigator';
import { RecipeDetailsScreenProps } from './components/RecipeDetailsScreen/RecipeDetailsScreen';
import { RootState } from '@app/store';

const useRecipeDetailsViewModel = (): RecipeDetailsScreenProps => {
  const {
    params: { id },
  } = useRoute<RecipeDetailsProps>();
  const recipe = useSelector((state: RootState) => getRecipeById(state, id));

  const saved = useSelector(getIsSaved);
  const saving = useSelector(getIsSaving);
  const error = useSelector(getIsError);
  const errorMessage = useSelector(getErrorMessage);

  const dispatch = useDispatch();
  const saveToCameraRoll = (url: string): void => {
    dispatch(savePicture({ url }));
  };

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
