import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import CustomAudioPlayer from './../../../custom-components/custom-audio-player';

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
        {/* CustomAudioPlayer is not working  */}
        <CustomAudioPlayer />
      </View>
    </>
  );
};

export default SermonNoteListHeader;

const styles = StyleSheet.create({
  image: {height: 250, width: '100%'},
  headerContent: {padding: 13},
  description: {fontFamily: 'Roboto-Thin'},
});
