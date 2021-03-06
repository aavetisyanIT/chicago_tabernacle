import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import timeFormat from './../../utils/trackPlayerUtils';
import {AppContext} from './../../context/app.context';
import {VideoPlayerContext} from './video-player-context/video.player.context';
import {actionTypes} from './../../context/action.types';
import {videoPlayerActionTypes} from './video-player-context/video.player.action.types';

const PlayerSlider = () => {
  const [videoPlayerState, dispatchToVideoPlayer] = React.useContext(
      VideoPlayerContext,
    ),
    [state, dispatch] = React.useContext(AppContext),
    {isFullScreenVideo} = state,
    {videoDuration, currentVideoPlayTime, videoPlayer} = videoPlayerState;

  const handleSlide = slide => {
    videoPlayer.seek(slide * videoDuration);
    dispatchToVideoPlayer({
      type: videoPlayerActionTypes.SET_CURRENT_VIDEO_PLAY_TIME,
      payload: slide * videoDuration,
    });
  };

  const handleFullScreen = () => {
    dispatch({type: actionTypes.TOGGLE_FULLSCREEN_VIDEO});
  };

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.timeStampsContainer}>
        <Text style={styles.durationTimeText}>{timeFormat(videoDuration)}</Text>
        <View style={styles.timeStampsInnerContainer}>
          <Text style={styles.currentTimeText}>
            {timeFormat(currentVideoPlayTime)}{' '}
          </Text>
          <Icon
            style={styles.fullscreenIcon}
            onPress={handleFullScreen}
            size={25}
            name={isFullScreenVideo ? 'fullscreen-exit' : 'fullscreen'}
          />
        </View>
      </View>
      <Slider
        maximumTrackImage="white"
        minimumTrackTintColor="#bc9665"
        thumbTintColor="white"
        value={currentVideoPlayTime / videoDuration}
        onValueChange={handleSlide}
      />
    </View>
  );
};

export default PlayerSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    position: 'absolute',
    left: 5,
    right: 0,
    bottom: 10,
  },
  timeStampsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  timeStampsInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  durationTimeText: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    marginTop: 1,
  },
  currentTimeText: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    marginTop: 1,
  },
  fullscreenIcon: {color: 'white'},
});
