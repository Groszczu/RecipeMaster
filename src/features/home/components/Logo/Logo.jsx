import React from 'react';
import { View, ImageBackground } from 'react-native';
import ResponsiveHeader from '../../../../components/ResponsiveHeader';
import CircleView from '../../../../components/CircleView';
import styles from './styles';

const backgroundImg = require('../../../../../assets/RecipeMasterLogo.jpg');

const Logo = ({ style }) => {
  return (
    <CircleView style={style}>
      <ImageBackground source={backgroundImg} style={styles.image}>
        <View style={styles.alpha}>
          <ResponsiveHeader>RecipeMaster</ResponsiveHeader>
        </View>
      </ImageBackground>
    </CircleView>
  );
};

export default Logo;
