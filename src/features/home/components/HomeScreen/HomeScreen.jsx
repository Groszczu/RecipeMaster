import React, { useState } from 'react';
import { View } from 'react-native';
import Logo from '../Logo/Logo';
import FloatingActionButton from '../FloatingActionButton';
import styles from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const dropDownItems = [
  {
    title: 'Get the recipe',
    backgroundColor: '#f44336',
    onPress: () => console.log('Recipe'),
  },
  {
    title: 'Zaloguj przez Facebooka',
    backgroundColor: '#01579b',
    icon: <FontAwesome name={'facebook'} size={32} color={'#fff'} />,
  },
];

const HomeScreen = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((value) => !value);
  const closeDropdown = () => dropdownOpen && setDropdownOpen(false);

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />

      <FloatingActionButton
        style={styles.dropdownButton}
        open={dropdownOpen}
        onPress={toggleDropdown}
        onBlur={closeDropdown}
        items={dropDownItems}
      />
    </View>
  );
};

export default HomeScreen;
