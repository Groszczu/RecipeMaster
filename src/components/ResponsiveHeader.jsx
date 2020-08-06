import React from 'react';
import { useWindowDimensions, Text } from 'react-native';

const getResponsiveFontSize = (screenWidth) => {
  switch (true) {
    case screenWidth < 320:
      return 24;
    case screenWidth < 480:
      return 26;
    case screenWidth < 768:
      return 28;
    case screenWidth < 1024:
      return 30;
    default:
      return 32;
  }
};

const ResponsiveHeader = ({ children }) => {
  const { width } = useWindowDimensions();
  const fontSize = getResponsiveFontSize(width);
  return <Text style={{ fontSize, fontWeight: 'bold' }}>{children}</Text>;
};

export default ResponsiveHeader;
