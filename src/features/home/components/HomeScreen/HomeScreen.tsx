import React from 'react';
import { View, Image } from 'react-native';
import Logo from '../Logo/Logo';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import colors from 'styles/colors';
import shared from 'styles/shared';
import { scale } from 'styles/scale';
import AlertModal from 'components/AlertModal';
import useModalState from 'hooks/useModalState';
import FAB from '@components/FloatingActionButton';

const featureIcon = require('images/feature.png');

export interface HomeScreenProps {
  loggedIn: boolean;
  error: boolean;
  errorMessage?: string;
  logInWithFacebook: () => void;
  navigateToRecipes: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  loggedIn,
  error,
  errorMessage,
  logInWithFacebook,
  navigateToRecipes,
}) => {
  const [showErrorModal, closeErrorModal] = useModalState(error);
  const [showLoggedInModal, closeLoggedInModal] = useModalState(loggedIn);

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
        <FAB
          style={styles.dropdownButton}
          backgroundColor={colors.secondary}
          animationDuration={250}
        >
          <FAB.Item
            label={'Get the recipe'}
            backgroundColor={'#f44336'}
            icon={
              <Image
                source={featureIcon}
                style={{ flex: 0.6, aspectRatio: 1 }}
              />
            }
            onPress={navigateToRecipes}
          />
          {loggedIn ? null : (
            <FAB.Item
              label={'Zaloguj przez Facebooka'}
              backgroundColor={'#01579b'}
              icon={
                <FontAwesome
                  name={'facebook'}
                  size={scale(26)}
                  color={'#fff'}
                />
              }
              onPress={logInWithFacebook}
            />
          )}
        </FAB>
      </View>
    </>
  );
};

export default HomeScreen;
