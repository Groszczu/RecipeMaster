import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../styles/colors';

interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <View style={styles.footer}>{children}</View>;
};

const styles = StyleSheet.create({
  footer: {
    flex: 0.1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.lightGrayBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
