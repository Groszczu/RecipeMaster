import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../../../components/Header';
import colors from '../../../../styles/colors';

const RecipeCard = ({ recipe, onPress }) => {
  const { title, imgs } = recipe;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View style={styles.card}>
          <Image source={{ uri: imgs[0] }} style={styles.image} />
          <Header style={styles.header}>{title}</Header>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '49%',
    maxWidth: 400,
    maxHeight: 250,
    marginBottom: 5,
  },
  touchable: {
    width: '100%',
    height: '100%',
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    overflow: 'hidden',
    borderColor: colors.text.grayDark,
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.text.white,
    borderRadius: 10,
  },
  header: {
    flex: 1,
  },
  image: {
    flex: 2,
    width: '100%',
    maxHeight: '50%',
  },
});

export default RecipeCard;
