import { StyleSheet } from 'react-native';
import { HEADER_HIGHT } from '../../../../styles/shared';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: HEADER_HIGHT,
  },
  logo: {
    width: '55%',
  },
  dropdownButton: {
    width: '20%',
    maxWidth: 145,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
  },
});
