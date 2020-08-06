import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#fec111',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  touchable: {
    borderRadius: 1000,
    backgroundColor: '#fec111',
  },
  plus: {
    height: '30%',
    aspectRatio: 1,
  },
  fillScreen: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
