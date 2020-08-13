import React from 'react';
import PropTypes from 'prop-types';
import { Modal, TouchableOpacity, StyleSheet, View } from 'react-native';
import Paragraph from './Paragraph';
import colors from '../styles/colors';
import { BlurView } from 'expo-blur';

interface AlertModalProps {
  visible: boolean;
  onRequestClose: () => void;
  title?: string;
  message?: string;
  buttons?: { title?: string; onPress?: () => void }[];
}

const AlertModal: React.FC<AlertModalProps> = ({
  visible,
  onRequestClose,
  title,
  message,
  buttons,
}) => {
  return (
    <Modal
      onRequestClose={onRequestClose}
      visible={visible}
      transparent={true}
      animationType={'fade'}
    >
      <BlurView tint={'light'} style={StyleSheet.absoluteFill}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Paragraph style={styles.text} bold={true}>
              {title}
            </Paragraph>
            <Paragraph style={styles.text} light={true}>
              {message}
            </Paragraph>
            <View style={styles.buttonsContainer}>
              {(buttons ? buttons : [{ title: 'Ok' }]).map((button, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    button.onPress && button.onPress();
                    onRequestClose();
                  }}
                  style={styles.button}
                >
                  <Paragraph>{button.title}</Paragraph>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

AlertModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, onPress: PropTypes.func })
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    padding: 10,
    maxWidth: 600,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    marginBottom: 10,
  },
  buttonsContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
});

export default AlertModal;
