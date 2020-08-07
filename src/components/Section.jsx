import React from 'react';
import { StyleSheet, View } from 'react-native';
import Paragraph from './Paragraph';

const Section = ({ title, contentWidth, children }) => {
  return (
    <View style={styles.container}>
      <Paragraph style={styles.title}>{title}:</Paragraph>
      <View style={[styles.content, { width: contentWidth }]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '6%',
    paddingBottom: 0,
  },
  title: {
    marginBottom: 18,
  },
  content: {
    alignSelf: 'center',
    width: '88%',
  },
});

export default Section;
