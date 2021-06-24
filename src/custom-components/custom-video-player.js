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

import timeFormat from './../utils/trackPlayerUtils';
import FullScreen from '../utils/fullScreen';
import {AppContext} from './../context/app.context';

const CustomVideoPlayer = ({videoUrl, imageUrl}) => {
  let {width, height} = Dimensions.get('window');

  let videoPlayer = null;
  let overlayTimerId = null;
  let lastTap = 0;
  let timerId = 0;

  const [state, dispatch] = React.useContext(AppContext);
  const [paused, setPaused] = React.useState(true);
  const [overlay, setOverlay] = React.useState(true);
  const [fullScreen, setFullScreen] = React.useState(false);
  const [duration, setDuration] = React.useState(0.1);
  const [currentTime, setCurrentTime] = React.useState(0);

  const toggleOverlay = () => {
    console.log('Toggling overlay');
    clearTimeout(overlayTimerId);
    overlayTimerId = setTimeout(() => {
      // setOverlay(overlay => !overlay), 4000;
    });
  };

  const handleLoad = ({duration}) => setDuration(duration);
  const handleProgress = ({currentTime}) => setCurrentTime(currentTime);
  const handleEnd = () => {
    setPaused(true);
    toggleOverlay();
  };

  const handleSlide = slide => {
    videoPlayer.seek(slide * duration);
    toggleOverlay();
  };

  const handlePlayPausePress = () => {
    setPaused(currentPaused => !currentPaused);
    toggleOverlay();
  };

  const handleSkipBackward_10 = () => {
    videoPlayer.seek(currentTime - 10);
    setCurrentTime(currentTime - 10);
    toggleOverlay();
  };
  const handleSkipForward_10 = () => {
    videoPlayer.seek(currentTime + 10);
    setCurrentTime(currentTime + 10);
    toggleOverlay();
  };

  const handleDoubleTap = (doubleTapCallback, signleTapCallback) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      clearTimeout(timerId);
      doubleTapCallback();
    } else {
      lastTap = now;
      timerId = setTimeout(() => {
        signleTapCallback();
      }, DOUBLE_PRESS_DELAY);
    }
  };

  const handleFullScreen = () => {
    if (fullScreen) {
      dispatch({type: 'FULL_SCREEN_VIDEO', payload: false});
      FullScreen.enable();
      Orientation.lockToPortrait();
    } else {
      dispatch({type: 'HORIZONTAL_VIEW_VIDEO', payload: true});
      FullScreen.disable();
      Orientation.lockToLandscape();
    }
    setFullScreen(currentFullScreen => !currentFullScreen);
  };

  const hiddenJumpBackward = () => {
    console.log('hiddenJumpBackward clicked');
    if (overlay) return;
    handleDoubleTap(
      () => {
        videoPlayer.seek(currentTime - 10);
        setCurrentTime(currentTime - 10);
      },
      () => {
        setOverlay(overlay => !overlay);
        clearTimeout(overlayTimerId);
        overlayTimerId = setTimeout(
          () => setOverlay(overlay => !overlay),
          4000,
        );
      },
    );
  };
  const hiddenJumpFrontward = () => {
    console.log('hiddenJumpFrontward clicked');
    if (overlay) return;
    handleDoubleTap(
      () => {
        videoPlayer.seek(currentTime + 10);
        setCurrentTime(currentTime + 10);
      },
      () => {
        setOverlay(overlay => !overlay);
        clearTimeout(overlayTimerId);
        overlayTimerId = setTimeout(
          () => setOverlay(overlay => !overlay),
          4000,
        );
      },
    );
  };

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
          fullscreen={fullScreen}
          poster={imageUrl}
          ref={ref => (videoPlayer = ref)}
          onLoad={handleLoad}
          onProgress={handleProgress}
          progressUpdateInterval={250.0}
          onVideoEnd={handleEnd}
        />
        <View style={styles.overlay}>
          {overlay ? (
            //shade effect
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
                <View style={styles.timer}>
                  <Text style={styles.text}>{timeFormat(duration)}</Text>
                  <Text style={styles.text}>
                    {timeFormat(currentTime)}{' '}
                    <Icon
                      onPress={handleFullScreen}
                      size={25}
                      name={fullScreen ? 'arrow-collapse' : 'arrow-expand'}
                    />
                  </Text>
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
                  onPress={null}
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

export default CustomVideoPlayer;

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
    left: 0,
    right: 0,
    bottom: 0,
  },
  timer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  text: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
});
