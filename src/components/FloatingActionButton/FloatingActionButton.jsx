import React, { useRef, useEffect, useState } from 'react';
import CircleView from '../CircleView';
import { BlurView } from 'expo-blur';
import {
  TouchableHighlight,
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';

import styles from './styles';
import FloatingActionButtonItem from './FloatingActionButtonItem';

const plusIcon = require('./../../../assets/plusIcon.png');

const FloatingActionButton = ({
  style,
  backgroundColor,
  open,
  onPress,
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

export default FloatingActionButton;
