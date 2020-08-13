import React from 'react';
import { View, ImageBackground, ViewStyle, StyleProp } from 'react-native';
import Header from 'components/Header';
import CircleView from 'components/CircleView';
import styles from './styles';

const backgroundImg = require('images/RecipeMasterLogo.jpg');

interface LogoProps {
  style: StyleProp<ViewStyle>;
}

const Logo: React.FC<LogoProps> = ({ style }) => {
  return (
    <CircleView style={[style, styles.logo]}>
      <ImageBackground source={backgroundImg} style={styles.image}>
        <View style={styles.alpha}>
          <Header>RecipeMaster</Header>
        </View>
      </ImageBackground>
    </CircleView>
  );
};

export default Logo;
