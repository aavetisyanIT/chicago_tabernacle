import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const SermonNoteListHeader = ({article}) => {
  return (
    <>
      <Image
        source={{uri: `${article.article.image.url}`}}
        style={styles.image}
      />
      <View style={styles.headerContent}>
        <Text>{article.article.headline}</Text>
        <Text style={styles.description}>{article.article.desc}</Text>
        {/* Need to create audio component */}
        <Text style={styles.audioPlayer}>AUDIO COMPONENT</Text>
      </View>
    </>
  );
};

export default SermonNoteListHeader;

const styles = StyleSheet.create({
  image: {height: 250, width: '100%'},
  headerContent: {padding: 13},
  audioPlayer: {margin: 12, color: '#bc9665', fontFamily: 'Roboto-Medium'},
  description: {fontFamily: 'Roboto-Thin'},
});
