import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';

interface CircleViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CircleView: React.FC<CircleViewProps> = ({ children, style }) => {
  return <View style={[style, styles.circle]}>{children}</View>;
};

const styles = StyleSheet.create({
  circle: {
    aspectRatio: 1,
    borderRadius: 1000,
    overflow: 'hidden',
  },
});

export default CircleView;
