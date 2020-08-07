import React from 'react';
import { View, ImageBackground } from 'react-native';
import Header from '../../../../components/Header';
import CircleView from '../../../../components/CircleView';
import styles from './styles';

const backgroundImg = require('../../../../../assets/RecipeMasterLogo.jpg');

const Logo = ({ style }) => {
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
