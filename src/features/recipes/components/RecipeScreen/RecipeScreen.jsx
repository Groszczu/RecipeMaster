import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import Paragraph from '../../../../components/Paragraph';
import styles from './styles';
import Section from '../../../../components/Section';

const RecipeScreen = ({ route }) => {
  const { title, description, ingredients, preparing, imgs } = route.params;

  return (
    <ScrollView>
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
            <Image key={url} source={{ uri: url }} style={styles.image} />
          ))}
        </View>
      </Section>
    </ScrollView>
  );
};

export default RecipeScreen;
