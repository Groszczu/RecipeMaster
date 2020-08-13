import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircleView from '../CircleView';
import { BlurView } from 'expo-blur';
import {
  TouchableHighlight,
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  ViewPropTypes,
} from 'react-native';

import styles from './styles';
import FloatingActionButtonItem from './FloatingActionButtonItem';

const plusIcon = require('images/plusIcon.png');

const FloatingActionButton = ({
  open,
  onPress,
  style,
  backgroundColor,
  onBlur,
  items,
  animationDuration,
}) => {
  const openAnimationValue = useRef(new Animated.Value(open ? 1 : 0)).current;
  const [showItems, setShowItems] = useState(open);

  useEffect(() => {
    open && setShowItems(true);
    Animated.timing(openAnimationValue, {
      toValue: open ? 1 : 0,
      duration: animationDuration || 250,
      useNativeDriver: true,
    }).start(() => !open && setShowItems(false));
  }, [open]);

  const addIconRotationAnimation = openAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '135deg'],
  });

  const itemsPositionAnimation = openAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['500%', '0%'],
  });

  const itemsTransform = { translateX: itemsPositionAnimation };

  return (
    <BlurView
      tint={'light'}
      intensity={open ? 100 : 0}
      style={StyleSheet.absoluteFill}
    >
      <TouchableOpacity
        accessible={false}
        activeOpacity={1}
        style={StyleSheet.absoluteFill}
        onPress={onBlur}
      >
        <View style={[styles.container, style]}>
          {showItems &&
            items.map((item, i) => (
              <FloatingActionButtonItem key={i} {...{ item, itemsTransform }} />
            ))}
          <TouchableHighlight style={styles.touchable} onPress={onPress}>
            <CircleView style={[styles.button, { backgroundColor }]}>
              <Animated.Image
                style={[
                  styles.plus,
                  { transform: [{ rotate: addIconRotationAnimation }] },
                ]}
                source={plusIcon}
              />
            </CircleView>
          </TouchableHighlight>
        </View>
      </TouchableOpacity>
    </BlurView>
  );
};

FloatingActionButton.propTypes = {
  open: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  backgroundColor: PropTypes.string,
  onBlur: PropTypes.func,
  items: PropTypes.array,
  animationDuration: PropTypes.number,
};

export default FloatingActionButton;
