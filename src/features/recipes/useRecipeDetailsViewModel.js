import { useSelector } from 'react-redux';
import { getRecipeById } from './selectors';
import { useRoute } from '@react-navigation/native';
import { useRef, useState } from 'react';
import useModalState from '../../hooks/useModalState';
import cameraRoll from '../../services/cameraRoll';
import { take } from 'rxjs/operators';

const useRecipeDetailsViewModel = () => {
  const {
    params: { id },
  } = useRoute();
  const recipe = useSelector((state) => getRecipeById(state, id));

  const [showSavePrompt, closeSavePrompt, openSavePrompt] = useModalState(
    false
  );
  const [imageSaveState, setImageSaveState] = useState({
    saved: false,
    error: false,
    message: null,
  });
  const closeSavedModal = () =>
    setImageSaveState({ ...imageSaveState, saved: false });
  const closeErrorModal = () =>
    setImageSaveState({ ...imageSaveState, error: false });

  const imageUrlRef = useRef('');

  const saveToCameraRoll = () =>
    cameraRoll
      .saveRemoteImage(imageUrlRef.current)
      .pipe(take(1))
      .subscribe((result) => {
        setImageSaveState(result);
      });

  const {
    saved: showSavedModal,
    error: showErrorModal,
    message,
  } = imageSaveState;

  return {
    recipe,
    saveToCameraRoll,
    showSavedModal,
    showErrorModal,
    closeSavedModal,
    closeErrorModal,
    message,
    showSavePrompt,
    openSavePrompt: (url) => {
      imageUrlRef.current = url;
      openSavePrompt();
    },
    closeSavePrompt,
  };
};

export default useRecipeDetailsViewModel;
