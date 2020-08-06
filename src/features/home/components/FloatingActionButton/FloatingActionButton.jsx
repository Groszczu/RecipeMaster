import React, { useRef, useEffect } from 'react';
import CircleView from '../../../../components/CircleView';
import { BlurView } from 'expo-blur';
import {
  TouchableHighlight,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';

import styles from './styles';
import FloatingActionButtonItem from './FloatingActionButtonItem';

const plusIcon = require('./../../../../../assets/plusIcon.png');

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const FloatingActionButton = ({ style, open, onPress, onBlur, items }) => {
  const openAnimationValue = useRef(new Animated.Value(open ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(openAnimationValue, {
      toValue: open ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [open]);

  const addIconRotationAnimation = openAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '135deg'],
  });

  const itemsPositionAnimation = openAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['200%', '0%'],
  });

  const blurAnimation = openAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const itemsTransform = { translateX: itemsPositionAnimation };

  return (
    <AnimatedBlurView
      tint={'light'}
      intensity={blurAnimation}
      style={styles.fillScreen}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={styles.fillScreen}
        onPress={onBlur}
      >
        <View style={[styles.container, style]}>
          {open &&
            items.map((item, i) => (
              <FloatingActionButtonItem key={i} {...{ item, itemsTransform }} />
            ))}
          <TouchableHighlight style={styles.touchable} onPress={onPress}>
            <CircleView style={styles.button}>
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
    </AnimatedBlurView>
  );
};

export default FloatingActionButton;
