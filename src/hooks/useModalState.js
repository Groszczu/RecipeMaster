import { useState, useEffect, useRef } from 'react';

const useModalState = (observedValue) => {
  const [visible, setVisible] = useState(false);
  const closeModal = () => setVisible(false);
  const openModal = () => setVisible(true);

  const mountRef = useRef(false);

  useEffect(() => {
    if (mountRef.current) {
      observedValue && setVisible(observedValue);
    } else {
      mountRef.current = true;
    }
  }, [observedValue]);

  return [visible, closeModal, openModal];
};

export default useModalState;
