import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

const CustomVideoPlayerMediaPlayer = ({
  videoUrl,
  imageUrl,
  isVideoPaused,
  // onProgress,
  // onLoad,
  // onEnd,
}) => {
  let videoPlayer = null;

  return (
    <Video
      paused={isVideoPaused}
      style={styles.video}
      source={{uri: videoUrl}}
      resizeMode="contain"
      poster={imageUrl}
      ref={ref => (videoPlayer = ref)}
      // onLoad={onLoad}
      // onProgress={onProgress}
      progressUpdateInterval={250.0}
      // onEnd={onEnd}
    />
  );
};

export default CustomVideoPlayerMediaPlayer;

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
});
