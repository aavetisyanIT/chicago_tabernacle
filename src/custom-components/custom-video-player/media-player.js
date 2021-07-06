import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

import {AppContext} from './../../context/app.context';

const MediaPlayer = ({videoUrl, imageUrl}) => {
  const [state, dispatch] = React.useContext(AppContext);

  const {isVideoPaused} = state;
  let videoPlayer = null;

  const handleOnLoad = ({duration}) => {
    dispatch({
      type: 'SET_VIDEO_DURATION',
      videoDuration: duration,
    });
  };
  const handleOnProgress = ({currentTime}) => {
    // dispatch({
    //   type: 'SET_CURRENT_VIDEO_PLAY_TIME',
    //   currentTime,
    //   // payload: {currentTime: currentTime},
    // });
  };

  const handleOnEnd = () => null;

  return (
    <Video
      paused={isVideoPaused}
      style={styles.video}
      source={{uri: videoUrl}}
      resizeMode="contain"
      poster={imageUrl}
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
