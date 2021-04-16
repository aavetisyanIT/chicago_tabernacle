import React from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';

import SermonNotesParagraph from '../components/sermon-notes-paragraph';

const SermonNotesTab = ({route}) => {
  const {article} = route.params;
  const imageUrl = article.image.url;

  const PARAGRAPHSDATA = article.paragraphs;

  const renderItem = props => <SermonNotesParagraph {...props} />;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Image source={{uri: `${imageUrl}`}} style={styles.image} />
            <View style={styles.headerContent}>
              <Text style={styles.headLine}>{article.headline}</Text>
              <Text style={styles.description}>{article.desc}</Text>
              <Text style={styles.audioPlayer}>AUDIO COMPONENT</Text>
            </View>
          </>
        }
        data={PARAGRAPHSDATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SermonNotesTab;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  image: {height: 250, width: '100%'},
  headerContent: {padding: 13},
  audioPlayer: {margin: 15, color: '#bc9665', fontFamily: 'Roboto-Medium'},
  description: {fontFamily: 'Roboto-Thin'},
});
