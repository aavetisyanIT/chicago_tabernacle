import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Orientation from 'react-native-orientation';

import timeFormat from '../utils/trackPlayerUtils';
import FullScreen from '../utils/fullScreen';
import {AppContext} from '../context/app.context';
import CustomVideoPlayerTracker from './custom-video-player-media-player';
import CustomVideoPlayerSlider from './custom-video-player-slider';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

let counter = 0;
const CustomVideoPlayerAlpha = ({videoUrl, imageUrl}) => {
  // Need to reduce component rerendering when video is playing
  // Need to add transitioning to height and width in fullscreen mode
  counter++;
  console.log(counter);
  const [state, dispatch] = React.useReducer(AppContext);
  const [paused, setPaused] = React.useState(true);
  const [overlay, setOverlay] = React.useState(true);
  const [fullScreen, setFullScreen] = React.useState(false);
  const [duration, setDuration] = React.useState(0.1);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [dimensions, setDimensions] = React.useState({window, screen});

  let {height, width} = dimensions.window;
  let videoPlayer = null;
  let lastTap = 0;
  let timerId = 0;

  // const onChange = ({window, screen}) => {
  //   setDimensions({window, screen});
  // };

  // React.useEffect(() => {
  //   Dimensions.addEventListener('change', onChange);
  //   return () => {
  //     Dimensions.removeEventListener('change', onChange);
  //   };
  // }, [fullScreen]);

  // const handleLoad = ({duration}) => setDuration(duration);
  // const handleProgress = ({currentTime}) => setCurrentTime(currentTime);
  // const handleEnd = () => {
  //   setPaused(true);
  //   videoPlayer.seek(0.1);
  //   setCurrentTime(0);
  //   setOverlay(true);
  // };

  // const handleSlide = slide => {
  //   videoPlayer.seek(slide * duration);
  //   setCurrentTime(slide * duration);
  // };
  // const handlePlayPausePress = () => {
  //   setPaused(currentPaused => !currentPaused);
  // };

  // const handleCloseIconPress = () => {
  //   setOverlay(false);
  // };
  // const handleSkipForward_10 = () => {
  //   if (currentTime >= duration) {
  //     setCurrentTime(duration);
  //     return;
  //   }
  //   videoPlayer.seek(currentTime + 10);
  //   setCurrentTime(currentTime + 10);
  // };
  // const handleSkipBackward_10 = () => {
  //   if (currentTime <= 10) {
  //     videoPlayer.seek(0.1);
  //     setCurrentTime(0);
  //     return;
  //   }
  //   videoPlayer.seek(currentTime - 10);
  //   setCurrentTime(currentTime - 10);
  // };

  // const handleDoubleTap = (doubleTapCallback, signleTapCallback) => {
  //   const now = Date.now();
  //   const DOUBLE_PRESS_DELAY = 300;
  //   if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
  //     clearTimeout(timerId);
  //     doubleTapCallback();
  //   } else {
  //     lastTap = now;
  //     timerId = setTimeout(() => {
  //       signleTapCallback();
  //     }, DOUBLE_PRESS_DELAY);
  //   }
  // };

  // const hiddenJumpFrontward = () => {
  //   if (currentTime >= duration) {
  //     setCurrentTime(duration);
  //     return;
  //   }
  //   handleDoubleTap(
  //     () => {
  //       videoPlayer.seek(currentTime + 10);
  //       setCurrentTime(currentTime + 10);
  //     },
  //     () => {
  //       setOverlay(true);
  //     },
  //   );
  // };
  // const hiddenJumpBackward = () => {
  //   if (currentTime <= 10) {
  //     videoPlayer.seek(0.1);
  //     setCurrentTime(0);
  //     return;
  //   }
  //   handleDoubleTap(
  //     () => {
  //       videoPlayer.seek(currentTime - 10);
  //       setCurrentTime(currentTime - 10);
  //     },
  //     () => {
  //       setOverlay(true);
  //     },
  //   );
  // };

  // const handleFullScreen = () => {
  //   if (fullScreen) {
  //     dispatch({type: 'FULL_SCREEN_VIDEO', payload: false});
  //     FullScreen.disable();
  //     Orientation.lockToPortrait();
  //   } else {
  //     dispatch({type: 'HORIZONTAL_VIEW_VIDEO', payload: true});
  //     FullScreen.enable();
  //     Orientation.lockToLandscape();
  //   }
  //   setFullScreen(currentFullScreen => !currentFullScreen);
  // };

  return (
    <View
      style={
        fullScreen
          ? {
              ...styles.fullscreenContainer,
              width: '100%',
              height,
            }
          : styles.container
      }>
      <View
        style={
          fullScreen
            ? styles.fullScreenMode
            : {...styles.videoPlayerContainer, width, height: width * 0.5625}
        }>
        <Video
          paused={paused}
          style={{...StyleSheet.absoluteFill}}
          source={{uri: videoUrl}}
          resizeMode="contain"
          poster={imageUrl}
          ref={ref => (videoPlayer = ref)}
          onLoad={handleLoad}
          onProgress={handleProgress}
          progressUpdateInterval={250.0}
          onEnd={handleEnd}></Video>
        <View style={styles.overlay}>
          {/* Shade effect */}
          {overlay ? (
            <View style={styles.iconContainer}>
              {/* Controllers */}
              <Icon
                name="skip-backward"
                style={styles.icon}
                onPress={handleSkipBackward_10}
              />
              <Icon
                name={paused ? 'play' : 'pause'}
                style={styles.icon}
                onPress={handlePlayPausePress}
              />
              <Icon
                name="skip-forward"
                style={styles.icon}
                onPress={handleSkipForward_10}
              />
              {/* Slider and time stamps */}
              <View style={styles.sliderContainer}>
                <View style={styles.timeStampsContainer}>
                  <Text style={styles.durationTimeText}>
                    {timeFormat(duration)}
                  </Text>
                  <View style={styles.timeStampsInnerContainer}>
                    <Text style={styles.currentTimeText}>
                      {timeFormat(currentTime)}{' '}
                    </Text>
                    <Icon
                      style={styles.fullscreenIcon}
                      onPress={handleFullScreen}
                      size={25}
                      name={fullScreen ? 'fullscreen-exit' : 'fullscreen'}
                    />
                  </View>
                </View>
                <Slider
                  maximumTrackImage="white"
                  minimumTrackTintColor="#bc9665"
                  thumbTintColor="white"
                  value={currentTime / duration}
                  onValueChange={handleSlide}
                />
              </View>
              <View
                style={
                  fullScreen
                    ? {...styles.closeIconContainer, left: width}
                    : {...styles.closeIconContainer, left: width * 0.9}
                }>
                <Icon
                  style={styles.closeIcon}
                  size={30}
                  onPress={handleCloseIconPress}
                  name="close"
                />
              </View>
            </View>
          ) : (
            <View style={styles.overlaySet}>
              <TouchableNativeFeedback onPress={hiddenJumpBackward}>
                <View style={{flex: 1}}></View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={hiddenJumpFrontward}>
                <View style={{flex: 1}}></View>
              </TouchableNativeFeedback>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default CustomVideoPlayerAlpha;

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 9},
  fullscreenContainer: {flex: 1},
  videoPlayerContainer: {
    backgroundColor: 'black',
  },
  fullScreenMode: {
    ...StyleSheet.absoluteFill,
    margin: -1,
  },
  overlay: {...StyleSheet.absoluteFill},
  overlaySet: {
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0006',
  },
  icon: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 40,
  },
  closeIconContainer: {
    position: 'absolute',
    top: 0,
    margin: 5,
  },
  closeIcon: {color: 'white'},
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
