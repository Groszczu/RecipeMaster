import React, { useRef, useEffect } from 'react';
import { BlurView } from 'expo-blur';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Animated,
  StyleProp,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import styles, { itemStyles } from './styles';
import CircleView from '@components/CircleView';
import Paragraph from '@components/Paragraph';

const plusIcon = require('images/plusIcon.png');

interface FABProps {
  children?: React.ReactNode;
  backgroundColor: string;
  style?: StyleProp<ViewStyle>;
  animationDuration?: number;
}

export interface FABItemProps {
  label?: string;
  backgroundColor?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
}

interface FABComposition {
    Item: React.FC<FABItemProps>;
}

const FAB: React.FC<FABProps> & FABComposition = ({
  children,
  backgroundColor,
  style,
  animationDuration,
}) => {
    const { width } = useWindowDimensions();
  const [open, setOpen] = React.useState(false);

  const toggleFAB = () => setOpen((oldState) => !oldState);
  const closeFAB = () => setOpen(false);

  const openAnimationValue = useRef(new Animated.Value(open ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(openAnimationValue, {
      toValue: open ? 1 : 0,
      duration: animationDuration || 250,
      useNativeDriver: true,
    }).start();
  }, [open]);

  const addIconRotationAnimation = openAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '135deg'],
  });

  const itemsPositionAnimation = openAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [width, 0],
  });

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
        onPress={closeFAB}
      >
        <View style={[styles.container, style]}>
          <Animated.View
            style={[styles.itemsContainer, { transform: [{ translateX: itemsPositionAnimation }] }]}
          >
            {open && children}
          </Animated.View>
          <TouchableHighlight style={styles.touchable} onPress={toggleFAB}>
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

FAB.Item = ({
  label,
  backgroundColor,
  icon,
  onPress,
}) => {
  return (
    <View style={[itemStyles.container]}>
      {label && (
        <View style={itemStyles.titleContainer}>
          <Paragraph>{label}</Paragraph>
        </View>
      )}
      <TouchableHighlight style={itemStyles.touchable} onPress={onPress}>
        <CircleView
          style={[
            itemStyles.circle,
            { backgroundColor: backgroundColor || 'black' },
          ]}
        >
          {icon}
        </CircleView>
      </TouchableHighlight>
    </View>
  );
};

export default FAB;
