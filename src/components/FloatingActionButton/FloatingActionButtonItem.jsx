import React from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet, View, TouchableHighlight } from 'react-native';
import CircleView from '../CircleView';
import Paragraph from '../Paragraph';

const FloatingActionButtonItem = ({ item, itemsTransform }) => {
  const { title, backgroundColor, icon, onPress } = item;
  return (
    <Animated.View style={[styles.container, { transform: [itemsTransform] }]}>
      {title && (
        <View style={styles.titleContainer}>
          <Paragraph>{title}</Paragraph>
        </View>
      )}
      <TouchableHighlight style={styles.touchable} onPress={onPress}>
        <CircleView
          style={[
            styles.circle,
            { backgroundColor: backgroundColor || 'black' },
          ]}
        >
          {icon}
        </CircleView>
      </TouchableHighlight>
    </Animated.View>
  );
};

FloatingActionButtonItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
    icon: PropTypes.element,
    onPress: PropTypes.func,
  }).isRequired,
  itemsTransform: PropTypes.object,
};

const styles = StyleSheet.create({
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

export default FloatingActionButtonItem;
