import React from 'react';
import PropTypes from 'prop-types';
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

Paragraph.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  light: PropTypes.bool,
  bold: PropTypes.bool,
  small: PropTypes.bool,
};

Paragraph.de;

export default Paragraph;
