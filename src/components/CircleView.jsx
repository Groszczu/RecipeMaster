import React from 'react';
import { View, StyleSheet } from 'react-native';

const CircleView = ({ children, style }) => {
  return <View style={[styles.circle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  circle: {
    aspectRatio: 1,
    borderRadius: 1000,
    overflow: 'hidden',
  },
});

export default CircleView;
