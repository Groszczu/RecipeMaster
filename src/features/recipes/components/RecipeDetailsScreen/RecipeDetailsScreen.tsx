import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import Paragraph from 'components/Paragraph';
import styles from './styles';
import Section from 'components/Section';
import shared from 'styles/shared';
import AlertModal from 'components/AlertModal';
import useModalState from 'hooks/useModalState';
import { RecipeModel } from '@features/recipes/RecipeModel';

export interface RecipeDetailsScreenProps {
  recipe: RecipeModel;
  saving: boolean;
  saved: boolean;
  error: boolean;
  errorMessage?: string;
  saveToCameraRoll: (url: string) => void;
}

const RecipeDetailsScreen: React.FC<RecipeDetailsScreenProps> = ({
  recipe,
  saving,
  saved,
  error,
  errorMessage,
  saveToCameraRoll,
}) => {
  const [showSavedModal, closeSavedModal] = useModalState(saved);
  const [showErrorModal, closeErrorModal] = useModalState(error);

  const [showSavePrompt, closeSavePrompt, openSavePrompt] = useModalState(
    false
  );

  const imageUrlRef = useRef('');

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
            onPress: () => saveToCameraRoll(imageUrlRef.current),
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
        message={errorMessage}
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
            {imgs.map((url, i) => (
              <TouchableOpacity
                key={url}
                onPress={() => {
                  imageUrlRef.current = url;
                  openSavePrompt();
                }}
                style={styles.imageWrapper}
              >
                <Image
                  source={{ uri: url }}
                  style={styles.image}
                  accessibilityLabel={`${title} image ${i + 1}`}
                />
              </TouchableOpacity>
            ))}
          </View>
        </Section>
      </ScrollView>
    </>
  );
};

export default RecipeDetailsScreen;
