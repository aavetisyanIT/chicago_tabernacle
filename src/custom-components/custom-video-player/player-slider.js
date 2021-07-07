import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FullScreen from '../../utils/fullScreen';
import {AppContext} from './../../context/app.context';
import {VideoPlayerContext} from './video-player-context/video.player.context';
import timeFormat from './../../utils/trackPlayerUtils';

let count = 0;
const PlayerSlider = () => {
  count = count + 1;
  // console.log(`PlayerSlider: ${count}`);
  const [videoPlayerState, dispatchToVideoPlayer] = React.useContext(
    VideoPlayerContext,
  );
  const [state, dispatch] = React.useContext(AppContext);

  const {isFullScreenVideo} = state;
  const {videoDuration, currentVideoPlayTime} = videoPlayerState;

  const handleSlide = slide => {
    // videoPlayer.seek(slide * duration);
    // setCurrentTime(slide * duration);
    console.log(slide);
    // return null;
  };
  const handleFullScreen = () => {
    //  if (fullScreen) {
    //    dispatch({type: 'FULL_SCREEN_VIDEO', payload: false});
    //    FullScreen.disable();
    //    Orientation.lockToPortrait();
    //  } else {
    //    dispatch({type: 'HORIZONTAL_VIEW_VIDEO', payload: true});
    //    FullScreen.enable();
    //    Orientation.lockToLandscape();
    //  }
    //  setFullScreen(currentFullScreen => !currentFullScreen);
    return null;
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
  sliderContainer: {position: 'absolute', left: 5, right: 0, bottom: 10},
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
