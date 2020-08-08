import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../styles/colors';

const Footer = ({ children }) => {
  return <View style={styles.footer}>{children}</View>;
};

Footer.propTypes = {
  children: PropTypes.any,
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
