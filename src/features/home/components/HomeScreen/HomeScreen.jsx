import React from 'react';
import { View } from 'react-native';
import Logo from '../Logo/Logo';
import FloatingActionButton from '../../../../components/FloatingActionButton';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import useHomeScreenViewModel from '../../useHomeScreenViewModel';
import colors from '../../../../styles/colors';
import useErrorAlert from '../../../../hooks/useErrorAlert';

const HomeScreen = () => {
  const {
    dropdownOpen,
    toggleDropdown,
    closeDropdown,
    loggedIn,
    error,
    errorMessage,
    logInWithFacebook,
    navigateToRecipes,
  } = useHomeScreenViewModel();

  useErrorAlert(error, 'Error', errorMessage);

  const items = [
    {
      title: 'Get the recipe',
      backgroundColor: '#f44336',
      onPress: navigateToRecipes,
    },
  ];

  !loggedIn &&
    items.push({
      title: 'Zaloguj przez Facebooka',
      backgroundColor: '#01579b',
      icon: <FontAwesome name={'facebook'} size={32} color={'#fff'} />,
      onPress: logInWithFacebook,
    });

  return (
    <>
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <FloatingActionButton
          style={styles.dropdownButton}
          backgroundColor={colors.secondary}
          open={dropdownOpen}
          onPress={toggleDropdown}
          onBlur={closeDropdown}
          items={items}
        />
      </View>
    </>
  );
};

export default HomeScreen;
