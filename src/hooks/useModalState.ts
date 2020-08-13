import { useState, useEffect, useRef } from 'react';

const useModalState = (
  observedValue: boolean
): [boolean, () => void, () => void] => {
  const [visible, setVisible] = useState(false);
  const closeModal = () => setVisible(false);
  const openModal = () => setVisible(true);

  const isMountedRef = useRef(false);

  useEffect(() => {
    if (isMountedRef.current) {
      observedValue && setVisible(observedValue);
    } else {
      isMountedRef.current = true;
    }
  }, [observedValue]);

  return [visible, closeModal, openModal];
};

export default useModalState;
