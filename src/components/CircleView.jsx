import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ViewPropTypes } from 'react-native';

const CircleView = ({ children, style }) => {
  return <View style={[style, styles.circle]}>{children}</View>;
};

CircleView.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.any,
};

const styles = StyleSheet.create({
  circle: {
    aspectRatio: 1,
    borderRadius: 1000,
    overflow: 'hidden',
  },
});

export default CircleView;
