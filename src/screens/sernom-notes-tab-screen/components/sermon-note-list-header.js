import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomAudioPlayer from './../../../custom-components/custom-audio-player';
import FastImage from 'react-native-fast-image';
import CustomButton from './../../../custom-components/custom-button';

const SermonNoteListHeader = ({article}) => {
  const [audioPlayerVisible, setAudioPlayerVisible] = React.useState(false);
  const showAudioPlayer = () => setAudioPlayerVisible(true);
  const hideAudioPlayer = () => setAudioPlayerVisible(false);

  const url = article.article.audio.url;
  let articleHasAudio = null;
  article.article.audio.type === 'audio'
    ? (articleHasAudio = true)
    : (articleHasAudio = false);

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
        {articleHasAudio ? (
          <CustomAudioPlayer
            url={url}
            audioPlayerVisible={audioPlayerVisible}
            showAudioPlayer={showAudioPlayer}
          />
        ) : null}
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
