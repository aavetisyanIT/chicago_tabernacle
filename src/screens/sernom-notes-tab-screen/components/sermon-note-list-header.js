import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import FastImage from 'react-native-fast-image';
import CustomTrackPlayer from '../../../custom-components/custom-track-player';
import CustomVideoPlayer from './../../../custom-components/custom-video-player/custom-video-player';
import {AppContext} from './../../../context/app.context';
import {actionTypes} from './../../../context/action.types';

const SermonNoteListHeader = ({article}) => {
  const [audioPlayerVisible, setAudioPlayerVisible] = React.useState(false);
  const [state, dispatch] = React.useContext(AppContext);

  const showAudioPlayer = () => setAudioPlayerVisible(true);
  const hideAudioPlayer = () => setAudioPlayerVisible(false);

  const audioUrl = article.audio.url;
  const audioId = article.audio.id;
  const videoUrl = article.video.url;
  const sermonTitle = article.headline;
  const sermonImage = article.image.url;

  React.useEffect(() => {
    dispatch({
      type: actionTypes.SET_ARTICLE_VIDEO_URL,
      payload: videoUrl,
    });
    dispatch({
      type: actionTypes.SET_ARTICLE_IMAGE_URL,
      payload: sermonImage,
    });
  }, []);

  let articleHasAudio = null;
  article.audio.type === 'audio'
    ? (articleHasAudio = true)
    : (articleHasAudio = false);

  return (
    <>
      {videoUrl ? (
        <CustomVideoPlayer />
      ) : (
        <FastImage
          source={{
            uri: `${sermonImage}`,
            priority: FastImage.priority.normal,
          }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
        />
      )}

      <View style={styles.headerContent}>
        <Text>{article.headline}</Text>
        <Text style={styles.description}>{article.desc}</Text>
        {articleHasAudio ? (
          <CustomTrackPlayer
            title={sermonTitle}
            trackId={audioId}
            url={audioUrl}
            image={sermonImage}
            trackPlayerVisible={audioPlayerVisible}
            showTrackPlayer={showAudioPlayer}
            hideTrackPlayer={hideAudioPlayer}
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
