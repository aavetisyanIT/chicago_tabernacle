import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

import DevotionalParagraph from './components/devotional-paragraph';
import DevotionalHeader from './components/devotional-header';

const DevotionalTab = ({route}) => {
  const {article} = route.params;
  const {devoContent} = article;
  const PARAGRAPHSDATA = devoContent[0].paragraphs;

  const renderItem = props => <DevotionalParagraph {...props} />;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <DevotionalHeader
            headLine={devoContent[0].headline}
            imageUrl={devoContent[0].image.url}
          />
        }
        data={PARAGRAPHSDATA}
        renderItem={renderItem}
        keyExtractor={paragraph => paragraph.id}
      />
    </View>
  );
};

export default DevotionalTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
