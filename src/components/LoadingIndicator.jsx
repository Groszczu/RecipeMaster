import React from 'react';
import { View, ActivityIndicator, Platform, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const LoadingIndicator = ({ style }) => {
  return (
    <View style={[style, styles.container]}>
      <ActivityIndicator
        size={Platform.OS === 'android' ? 100 : 'large'}
        color={colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingIndicator;
