import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

const CustomVideoPlayerTracker = ({
  videoUrl,
  imageUrl,
  paused,
  onProgress,
  onLoad,
  onEnd,
}) => {
  let videoPlayer = null;

  return (
    <Video
      paused={paused}
      style={{...StyleSheet.absoluteFill}}
      source={{uri: videoUrl}}
      resizeMode="contain"
      poster={imageUrl}
      ref={ref => (videoPlayer = ref)}
      onLoad={onLoad}
      onProgress={onProgress}
      progressUpdateInterval={250.0}
      onEnd={onEnd}
    />
  );
};

export default CustomVideoPlayerTracker;
