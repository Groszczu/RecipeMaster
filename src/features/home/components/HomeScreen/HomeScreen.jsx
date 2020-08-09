import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Logo from '../Logo/Logo';
import FloatingActionButton from '~/components/FloatingActionButton';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import colors from '~/styles/colors';
import shared from '~/styles/shared';
import { scale } from '~/styles/scale';
import AlertModal from '~/components/AlertModal';
import useModalState from '~/hooks/useModalState';

const featureIcon = require('~/images/feature.png');

const HomeScreen = ({
  loggedIn,
  error,
  errorMessage,
  logInWithFacebook,
  navigateToRecipes,
}) => {
  const [fabOpen, setFabOpen] = useState(false);
  const toggleFab = () => setFabOpen(!fabOpen);
  const closeFab = () => setFabOpen(false);

  const [showErrorModal, closeErrorModal] = useModalState(error);
  const [showLoggedInModal, closeLoggedInModal] = useModalState(loggedIn);

  const items = [
    {
      title: 'Get the recipe',
      backgroundColor: '#f44336',
      icon: (
        <Image source={featureIcon} style={{ flex: 0.6, aspectRatio: 1 }} />
      ),
      onPress: navigateToRecipes,
    },
  ];

  !loggedIn &&
    items.push({
      title: 'Zaloguj przez Facebooka',
      backgroundColor: '#01579b',
      icon: <FontAwesome name={'facebook'} size={scale(26)} color={'#fff'} />,
      onPress: logInWithFacebook,
    });

  return (
    <>
      <AlertModal
        visible={showErrorModal}
        onRequestClose={closeErrorModal}
        title={'Error'}
        message={errorMessage}
      />
      <AlertModal
        visible={showLoggedInModal}
        onRequestClose={closeLoggedInModal}
        title={'Logged in successfully'}
      />

      <View style={[shared.screenBackground, styles.container]}>
        <Logo style={styles.logo} />
        <FloatingActionButton
          style={styles.dropdownButton}
          backgroundColor={colors.secondary}
          open={fabOpen}
          onPress={toggleFab}
          onBlur={closeFab}
          items={items}
        />
      </View>
    </>
  );
};

HomeScreen.propTypes = {
  loggedIn: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,

  logInWithFacebook: PropTypes.func.isRequired,
  navigateToRecipes: PropTypes.func.isRequired,
};

export default HomeScreen;
