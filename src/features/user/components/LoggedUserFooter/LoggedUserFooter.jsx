import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Footer from '~/components/Footer';
import Paragraph from '~/components/Paragraph';
import styles from './styles';

const LoggedUserFooter = ({ loggedIn, userName, picture }) => {
  return loggedIn ? (
    <Footer>
      <Paragraph small center>
        Logged as {userName}{' '}
      </Paragraph>
      {picture?.url && (
        <Image
          source={{ uri: picture.url }}
          width={picture.width}
          height={picture.height}
          style={styles.picture}
        />
      )}
    </Footer>
  ) : (
    <></>
  );
};

LoggedUserFooter.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  picture: PropTypes.shape({
    url: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default LoggedUserFooter;
