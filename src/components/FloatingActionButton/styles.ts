import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemsContainer: {
    flex: 1,
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

export const itemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    position: 'absolute',
    padding: 10,
    bottom: '38%',
    right: '80%',
    backgroundColor: '#fff',
    elevation: 1,
    justifyContent: 'center',
    borderRadius: 5,
  },
  touchable: {
    borderRadius: 1000,
    width: '70%',
    marginBottom: '25%',
  },
  circle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
