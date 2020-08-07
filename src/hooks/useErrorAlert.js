const { useEffect } = require('react');
const { Alert } = require('react-native');

const useErrorAlert = (error, title = 'Error', message) => {
  useEffect(() => {
    error && Alert.alert(title, message);
  }, [error, title, message]);
};

export default useErrorAlert;
