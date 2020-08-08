import React from 'react';
import { StyleSheet, View } from 'react-native';
import Paragraph from './Paragraph';

const CONTAINER_PADDING = 6;
const Section = ({ title, contentWidth, children }) => {
  return (
    <View style={styles.container}>
      <Paragraph style={styles.title} bold={true}>
        {title}:
      </Paragraph>
      <View
        style={[styles.content, contentWidth ? { width: contentWidth } : null]}
      >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: `${CONTAINER_PADDING}%`,
    paddingBottom: 0,
  },
  title: {
    marginBottom: 18,
  },
  content: {
    alignSelf: 'center',
    width: `${100 - 2 * CONTAINER_PADDING}%`,
  },
});

export default Section;
