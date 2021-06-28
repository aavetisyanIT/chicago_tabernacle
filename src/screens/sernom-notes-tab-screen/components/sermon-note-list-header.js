import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import FastImage from 'react-native-fast-image';
import CustomTrackPlayer from '../../../custom-components/custom-track-player';
import CustomVideoPlayer from './../../../custom-components/custom-video-player';
import {AppContext} from './../../../context/app.context';

const SermonNoteListHeader = ({article}) => {
  const [state, dispatch] = React.useContext(AppContext);
  const [audioPlayerVisible, setAudioPlayerVisible] = React.useState(false);
  const showAudioPlayer = () => setAudioPlayerVisible(true);
  const hideAudioPlayer = () => setAudioPlayerVisible(false);

  console.log(state);

  let {height, width} = Dimensions.get('window');
  React.useEffect(() => {
    // console.log('useEffect');
    width = Dimensions.get('window').width;
    height = Dimensions.get('window').height;
    // console.log('Width: ', width);
    // console.log('height: ', height);
  }, [state]);

  const audioUrl = article.audio.url;
  const audioId = article.audio.id;
  const videoUrl = article.video.url;
  const sermonTitle = article.headline;
  const sermonImage = article.image.url;

  let articleHasAudio = null;
  article.audio.type === 'audio'
    ? (articleHasAudio = true)
    : (articleHasAudio = false);

  return (
    <>
      {videoUrl ? (
        <CustomVideoPlayer
          videoUrl={videoUrl}
          imageUrl={sermonImage}
          height={height}
          width={width}
        />
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
