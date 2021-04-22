import React from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';

import SermonNote from './components/sermon-note';
import SermonNoteListHeader from './components/sermon-note-list-header';

const SermonNotesTab = ({route}) => {
  const {article} = route.params;

  const PARAGRAPHDATA = article.paragraphs;

  const renderItem = props => <SermonNote {...props} />;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<SermonNoteListHeader article={route.params} />}
        data={PARAGRAPHDATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SermonNotesTab;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
