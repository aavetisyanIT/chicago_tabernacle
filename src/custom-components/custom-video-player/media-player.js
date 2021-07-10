import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

import {AppContext} from './../../context/app.context';
import {actionTypes} from './../../context/action.types';
import {VideoPlayerContext} from './video-player-context/video.player.context';
import {videoPlayerActionTypes} from './video-player-context/video.player.action.types';

let count = 0;
const MediaPlayer = () => {
  count = count + 1;
  console.log(`MediaPlayer: ${count}`);

  const [state, dispatch] = React.useContext(AppContext);
  const [videoPlayerState, dispatchToVideoPlayer] = React.useContext(
    VideoPlayerContext,
  );

  const {isVideoPaused, articleVideoUrl, articleImageUrl} = state;
  const {currentVideoPlayTime, videoDuration} = videoPlayerState;

  let videoPlayer = null;

  const handleOnLoad = ({duration}) => {
    dispatchToVideoPlayer({
      type: videoPlayerActionTypes.SET_VIDEO_DURATION,
      payload: {videoDuration: duration},
    });
  };
  const handleOnProgress = ({currentTime}) => {
    dispatchToVideoPlayer({
      type: videoPlayerActionTypes.SET_CURRENT_VIDEO_PLAY_TIME,
      payload: {currentTime: currentTime},
    });
  };

  const handleOnEnd = () => null;

  return (
    <Video
      paused={isVideoPaused}
      style={styles.video}
      source={{
        uri: articleVideoUrl
          ? articleVideoUrl
          : 'https://player.vimeo.com/external/535955445.m3u8?s=9b15c3f1d9565e47615953db6c46c27b79c686fb',
      }}
      resizeMode="contain"
      poster={
        articleImageUrl
          ? articleImageUrl
          : 'https://chitab.org/wp-content/uploads/2020/09/CT-blank-slide.png'
      }
      progressUpdateInterval={250.0}
      ref={ref => (videoPlayer = ref)}
      onLoad={handleOnLoad}
      onProgress={handleOnProgress}
      onEnd={handleOnEnd}
    />
  );
};

export default MediaPlayer;

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
});
