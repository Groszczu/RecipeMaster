import React from 'react';
import Footer from '../../../components/Footer';
import Paragraph from '../../../components/Paragraph';
import useUserViewModel from '../useUserViewModel';
import { Image, StyleSheet } from 'react-native';

const LoggedUserFooter = () => {
  const { loggedIn, userName, picture } = useUserViewModel();

  return loggedIn ? (
    <Footer>
      <Paragraph small center>
        Logged as {userName}{' '}
      </Paragraph>
      {picture?.data.url && (
        <Image
          source={{ uri: picture.data.url }}
          width={picture.data.width}
          height={picture.data.height}
          style={styles.picture}
        />
      )}
    </Footer>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  picture: {
    height: '50%',
    aspectRatio: 1,
    margin: 15,
  },
});

export default LoggedUserFooter;
