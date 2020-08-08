import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import Paragraph from '../../../../components/Paragraph';
import styles from './styles';
import Section from '../../../../components/Section';
import shared from '../../../../styles/shared';
import AlertModal from '../../../../components/AlertModal';

const RecipeDetailsScreen = ({
  recipe,
  saveToCameraRoll,
  showSavedModal,
  showErrorModal,
  message,
  closeSavedModal,
  closeErrorModal,
  showSavePrompt,
  openSavePrompt,
  closeSavePrompt,
}) => {
  const { title, description, ingredients, preparing, imgs } = recipe;

  return (
    <>
      <AlertModal
        visible={showSavePrompt}
        onRequestClose={closeSavePrompt}
        title={'Save the picture?'}
        message={'Do you want to save the picture?'}
        buttons={[
          {
            title: 'Yes',
            onPress: saveToCameraRoll,
          },
          { title: 'Cancel' },
        ]}
      />
      <AlertModal
        visible={showSavedModal}
        onRequestClose={closeSavedModal}
        title={'Picture saved'}
        message={'Picture saved successfully'}
      />
      <AlertModal
        visible={showErrorModal}
        onRequestClose={closeErrorModal}
        title={'Unable to save the picture'}
        message={message}
      />

      <ScrollView style={shared.screenBackground}>
        <Section title={title}>
          <Paragraph light={true}>{description}</Paragraph>
        </Section>
        <Section title={'Ingredients'}>
          {ingredients.map((ingredient, i) => (
            <Paragraph key={i} light={true}>
              - {ingredient}
            </Paragraph>
          ))}
        </Section>
        <Section title={'Preparing'}>
          {preparing.map((step, i) => (
            <Paragraph key={i} light={true} style={{ marginBottom: 14 }}>{`${
              i + 1
            }. ${step}`}</Paragraph>
          ))}
        </Section>
        <Section title={'Images'} contentWidth={'92%'}>
          <View style={styles.imagesContainer}>
            {imgs.map((url) => (
              <TouchableOpacity
                key={url}
                onPress={() => openSavePrompt(url)}
                style={styles.imageWrapper}
              >
                <Image source={{ uri: url }} style={styles.image} />
              </TouchableOpacity>
            ))}
          </View>
        </Section>
      </ScrollView>
    </>
  );
};

RecipeDetailsScreen.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    ingredient: PropTypes.arrayOf(PropTypes.string),
    preparing: PropTypes.arrayOf(PropTypes.string),
    imgs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,

  saveToCameraRoll: PropTypes.func,

  showSavedModal: PropTypes.bool.isRequired,
  closeSavedModal: PropTypes.func.isRequired,

  showErrorModal: PropTypes.bool.isRequired,
  closeErrorModal: PropTypes.func.isRequired,

  message: PropTypes.string,

  showSavePrompt: PropTypes.bool.isRequired,
  openSavePrompt: PropTypes.func.isRequired,
  closeSavePrompt: PropTypes.func.isRequired,
};

export default RecipeDetailsScreen;
