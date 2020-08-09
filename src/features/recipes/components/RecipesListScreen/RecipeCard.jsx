import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '~/components/Header';
import colors from '~/styles/colors';
import shared from '~/styles/shared';

const RecipeCard = ({ recipe, onPress }) => {
  const { title, imgs } = recipe;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <View style={[shared.screenBackground, styles.card]}>
          <Image source={{ uri: imgs[0] }} style={styles.image} />
          <Header style={styles.header}>{title}</Header>
        </View>
      </TouchableOpacity>
    </View>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    imgs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onPress: PropTypes.func.isRequired,
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
    borderColor: colors.secondary,
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
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
