import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { scale } from '../styles/scale';

interface HeaderProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const Header: React.FC<HeaderProps> = ({ children, style }) => {
  return <Text style={[style, styles.header]}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: scale(24),
    fontWeight: 'bold',
  },
});

export default Header;
