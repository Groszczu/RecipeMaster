import React from 'react';
import { Image } from 'react-native';
import Footer from 'components/Footer';
import Paragraph from 'components/Paragraph';
import styles from './styles';

interface LoggedUserFooterProps {
  loggedIn: boolean;
  userName?: string;
  picture?: any;
}

const LoggedUserFooter: React.FC<LoggedUserFooterProps> = ({
  loggedIn,
  userName,
  picture,
}) => {
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

export default LoggedUserFooter;
