import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import FastImage from 'react-native-fast-image';
import CustomTrackPlayer from '../../../custom-components/custom-track-player';

const SermonNoteListHeader = ({article}) => {
  const [audioPlayerVisible, setAudioPlayerVisible] = React.useState(false);
  const showAudioPlayer = () => setAudioPlayerVisible(true);
  const hideAudioPlayer = () => setAudioPlayerVisible(false);

  const url = article.audio.url;
  const audioId = article.audio.id;
  const sermonTitle = article.headline;
  const sermonImage = article.image.url;

  let articleHasAudio = null;
  article.audio.type === 'audio'
    ? (articleHasAudio = true)
    : (articleHasAudio = false);

  return (
    <>
      <FastImage
        source={{
          uri: `${sermonImage}`,
          priority: FastImage.priority.normal,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.headerContent}>
        <Text>{article.headline}</Text>
        <Text style={styles.description}>{article.desc}</Text>
        {articleHasAudio ? (
          <CustomTrackPlayer
            title={sermonTitle}
            trackId={audioId}
            url={url}
            image={sermonImage}
            trackPlayerVisible={audioPlayerVisible}
            showTrackPlayer={showAudioPlayer}
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
