import React from 'react';
import {Dimensions, StyleSheet, View, Animated, Easing} from 'react-native';
import Orientation from 'react-native-orientation';

import {AppContext} from './../../context/app.context';
import {actionTypes} from './../../context/action.types';

let count = 0;
const PlayerFullscreenProvider = props => {
  count = count + 1;
  // console.log(`PlayerFullscreenProvider: ${count}`);

  // issues:
  // close icon jumps on screen mode change
  // single devotional from home screen is showing header

  const [state, dispatch] = React.useContext(AppContext);

  const {screenDimensions, isFullScreenVideo} = state;
  const screenHeight = screenDimensions.window.height;
  const screenWidth = screenDimensions.window.width;

  const width = React.useRef(new Animated.Value(screenWidth)).current;
  const height = React.useRef(new Animated.Value(screenHeight)).current;

  console.log(
    `Fullscreen Provider height: ${screenHeight}, wigth: ${screenWidth}`,
  );

  React.useEffect(() => {
    Animated.timing(width, {
      toValue: screenWidth * 0.57,
      duration: 0,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    Animated.timing(height, {
      // adding 1 to hide little stripe
      toValue: screenWidth + 1,
      duration: 0,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  const toggleScreenModes = () => {
    if (isFullScreenVideo) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
  };

  const onScreenRotation = ({window, screen}) => {
    dispatch({
      type: actionTypes.SET_SCREEN_DIMENSIONS,
      payload: {window: window, screen: screen},
    });
  };

  React.useEffect(() => {
    Dimensions.addEventListener('change', onScreenRotation);
    toggleScreenModes();
    return () => {
      Dimensions.removeEventListener('change', onScreenRotation);
    };
  }, [isFullScreenVideo]);

  return (
    <Animated.View
      style={
        isFullScreenVideo
          ? {
              ...styles.fullscreenContainer,
              height: height,
              marginTop: -1,
            }
          : {
              ...styles.container,
              height: width,
            }
      }>
      <View style={styles.childrenContainer}>{props.children}</View>
    </Animated.View>
  );
};

export default PlayerFullscreenProvider;

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 9},
  fullscreenContainer: {
    flex: 1,
  },
  childrenContainer: {flex: 1},
});
