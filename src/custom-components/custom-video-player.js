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

const {width} = Dimensions.get('window');

const CustomVideoPlayer = ({videoUrl, imageUrl}) => {
  let Player = null;
  let overlayTimer = null;
  let lastTap = 0;
  let timer = 0;

  const [paused, setPaused] = React.useState(false);
  const [overlay, setOverlay] = React.useState(false);
  const [fullScreen, setFullScreen] = React.useState(false);
  const [duration, setDuration] = React.useState(0.1);
  const [currentTime, setCurrentTime] = React.useState(0);

  const handleLoad = ({duration}) => setDuration(duration);
  const handleProgress = ({currentTime}) => setCurrentTime(currentTime);
  const handleEnd = () => setPaused(true);

  const handleSlide = slide => {
    Player.seek(slide * duration);
    clearTimeout(overlayTimer);
    overlayTimer = setTimeout(() => setOverlay(false), 3000);
  };

  const goBackward_10 = () => {
    Player.seek(currentTime - 10);
    clearTimeout(overlayTimer);
    overlayTimer = setTimeout(() => setOverlay(false), 3000);
  };
  const goForward_10 = () => {
    Player.seek(currentTime + 10);
    clearTimeout(overlayTimer);
    overlayTimer = setTimeout(() => setOverlay(false), 3000);
  };

  const handleDoubleTap = (doubleTapCallback, signleTapCallback) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      clearTimeout(timer);
      doubleTapCallback();
    } else {
      lastTap = now;
      timer = setTimeout(() => {
        signleTapCallback();
      }, DOUBLE_PRESS_DELAY);
    }
  };

  const handleFullScreen = () => {
    if (fullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
    setFullScreen(currentFullScreen => !currentFullScreen);
  };

  const hiddenJumpBackward = () => {
    handleDoubleTap(
      () => {
        Player.seek(currentTime - 10);
      },
      () => {
        setOverlay(true);
        overlayTime = setTimeout(() => setOverlay(false), 3000);
      },
    );
  };
  const hiddenJumpFrontward = () => {
    handleDoubleTap(
      () => {
        Player.seek(currentTime + 10);
      },
      () => {
        setOverlay(true);
        overlayTimer = setTimeout(() => setOverlay(false), 3000);
      },
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={
          fullScreen ? styles.fullScreenMode : styles.videoPlayerContainer
        }>
        <Video
          paused={!paused}
          style={{...StyleSheet.absoluteFill}}
          source={{uri: videoUrl}}
          resizeMode="cover"
          fullscreen={fullScreen}
          poster={imageUrl}
          ref={ref => (Player = ref)}
          onLoad={handleLoad}
          onProgress={handleProgress}
          // onVideoEnd = {null}
        />
        <View style={styles.overlay}>
          {overlay ? (
            //shade effect
            <View style={{...styles.overlaySet, backgroundColor: '#0006'}}>
              {/* Controllers */}
              {/* backward is not working */}
              <Icon
                name="skip-backward"
                style={styles.icon}
                onPress={goBackward_10}
              />
              <Icon
                name={paused ? 'pause' : 'play'}
                style={styles.icon}
                onPress={() => setPaused(currentPaused => !currentPaused)}
              />
              {/* forward is not working */}
              <Icon
                name="skip-forward"
                style={styles.icon}
                onPress={goForward_10}
              />
              {/* Slider and time stamps */}

              <View style={styles.sliderContainer}>
                <View style={styles.timer}>
                  <Text style={styles.text}>{timeFormat(duration)}</Text>
                  <Text style={styles.text}>
                    {timeFormat(currentTime)}{' '}
                    <Icon
                      onPress={handleFullScreen}
                      size={20}
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
  container: {flex: 1},
  videoPlayerContainer: {
    width,
    height: width * 0.5625,
    backgroundColor: 'black',
  },
  fullScreenMode: {
    width,
    height: width * 0.5625,
    backgroundColor: 'black',
    ...StyleSheet.absoluteFill,
    elevation: 1,
  },
  overlay: {...StyleSheet.absoluteFill},
  overlaySet: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 40,
  },
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
