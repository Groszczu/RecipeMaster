import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    width: '48%',
    maxWidth: 400,
    height: '100%',
    marginBottom: '4%',
    aspectRatio: 4 / 3,
  },
});
