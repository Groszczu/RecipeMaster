import React from 'react';
import { Text } from 'react-native';
import colors from '../styles/colors';
import { scale } from '../styles/scale';

const Paragraph = ({ style, children, light, center, bold, small }) => {
  return (
    <Text
      style={[
        style,
        {
          fontSize: scale(small ? 12 : 14),
          fontWeight: bold ? 'bold' : 'normal',
          color: light ? colors.text.grayLight : colors.text.grayDark,
          textAlign: center ? 'center' : 'auto',
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
