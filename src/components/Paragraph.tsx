import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleProp, TextStyle } from 'react-native';
import colors from '../styles/colors';
import { scale } from '../styles/scale';

interface ParagraphProps {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  light?: boolean;
  center?: boolean;
  bold?: boolean;
  small?: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({
  style,
  children,
  light,
  center,
  bold,
  small,
}) => {
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
