import React from 'react';
import { FlatList } from 'react-native';

const RecipesListScreen = () => {
  const recipes = [
    {
      title: 'Pizza',
      description:
        'Pizza jest potrawą kuchni włoskiej, obecnie szeroko rozpowszechnioną na całym świecie i zaliczaną do dań typu fast food. W wersji podstawowej jest to płaski placek z wytrawnego ciasta makaronowego; znacznie później zaczęto także używać ciasta drożdżowego (focaccia). Pizza pieczona jest w bardzo mocno nagrzanym piecu.',
      ingredients: [
        '3 szklanki mąki pszennej',
        '1 łyżeczka soli',
        'przyprawy do smaku (oregano, bazylia i słodka papryka)',
        '1 szklanka ciepłej wody',
        '50g świeżych drożdży',
        '3 łyżeczki oliwy z oliwek lub oleju',
        'szczypta cukru ',
        'sos pomidorowy',
      ],
      preparing: [
        'Suche składniki dokładnie mieszamy.',
        'Drożdże zalawamy ciepłą wodą, olejem i cukrem. Odstawiamy do wyrośnięcia.',
        'Gotowy płyn wlewamy do mąki i mieszam najpierw łyżką, potem zagniatamy ręką.',
        'Ciasto odstawiamy pod przykryciem do wyrośnięcia na ok. 30 minut. ',
        'Rozgrzać piekarnik do 250 st. C.',
        'Na papierze do pieczenia  uformować z gotowego ciasta placki. Wychodzą dwie cienkie pizze o średnicy 30cm. Jednak ciasto to również nadaje się na wykonanie pizzy na grubym cieście.',
        'Posmarować spody sosem pomidorowym (przepis na sos) . Można już w tym momencie nałożyć na wierzch pizzy swoje ulubione składniki.',
        'Piec ok. 7-10 minut.',
      ],
      imgs: [
        'http://mooduplabs.com/test/pizza1.jpg',
        'http://mooduplabs.com/test/pizza2.jpg',
        'http://mooduplabs.com/test/pizza3.jpg',
      ],
    },
  ];

  return (
    <ScrollView>
      <FlatList
        data={recipes}
        renderItem={(item) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default RecipesListScreen;
