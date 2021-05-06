import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

import DevotionalHeader from './components/devotional-header';
import DevotionalContent from './components/devotional-content';

const DevotionalTab = ({route}) => {
  console.log('====================================');
  console.log('DevotionalTab', route);
  console.log('====================================');
  // const {article} = route.params;
  // const {devoContent} = article;
  // const PARAGRAPHSDATA = devoContent[0].paragraphs;

  // const renderItem = props => <DevotionalContent {...props} />;

  return (
    <View style={styles.container}>
      <Text>DevotionalTab</Text>
      {/* <FlatList
        ListHeaderComponent={
          <DevotionalHeader
            headLine={devoContent[0].headline}
            imageUrl={devoContent[0].image.url}
          />
        }
        data={PARAGRAPHSDATA}
        renderItem={renderItem}
        keyExtractor={paragraph => paragraph.id}
      /> */}
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
