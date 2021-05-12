import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomAudioPlayer from './../../../custom-components/custom-audio-player';
import FastImage from 'react-native-fast-image';

const SermonNoteListHeader = ({article}) => {
  return (
    <>
      <FastImage
        source={{
          uri: `${article.article.image.url}`,
          priority: FastImage.priority.normal,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
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
