import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  touchable: {
    borderRadius: 1000,
    backgroundColor: null,
  },
  plus: {
    height: '30%',
    aspectRatio: 1,
  },
});
