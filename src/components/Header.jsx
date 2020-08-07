import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { scale } from '../styles/scale';

const Header = ({ children, style }) => {
  return <Text style={[style, styles.header]}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: scale(24),
    fontWeight: 'bold',
  },
});

export default Header;
