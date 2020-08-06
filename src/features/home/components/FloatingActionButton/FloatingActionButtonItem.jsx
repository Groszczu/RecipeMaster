import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import CircleView from '../../../../components/CircleView';

const FloatingActionButtonItem = ({ item, itemsTransform }) => {
  const { title, backgroundColor, icon, onPress } = item;
  return (
    <Animated.View style={[styles.container, { transform: [itemsTransform] }]}>
      {title && (
        <View style={styles.titleContainer}>
          <Text>{title}</Text>
        </View>
      )}
      <TouchableHighlight style={styles.touchable} onPress={onPress}>
        <CircleView
          style={[
            styles.circle,
            { backgroundColor: backgroundColor || 'black' },
          ]}
        >
          {icon}
        </CircleView>
      </TouchableHighlight>
    </Animated.View>
  );
};

export default FloatingActionButtonItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    position: 'absolute',
    padding: 10,
    bottom: '38%',
    right: '80%',
    backgroundColor: '#fff',
    elevation: 1,
    justifyContent: 'center',
    borderRadius: 5,
  },
  touchable: {
    borderRadius: 1000,
    width: '70%',
    marginBottom: '25%',
  },
  circle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
