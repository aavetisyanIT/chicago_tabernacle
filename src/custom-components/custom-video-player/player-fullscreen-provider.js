import React from 'react';
import {Dimensions, StyleSheet, View, Animated, Easing} from 'react-native';
import Orientation from 'react-native-orientation';

import {AppContext} from './../../context/app.context';
import {actionTypes} from './../../context/action.types';

const PlayerFullscreenProvider = props => {
  const [state, dispatch] = React.useContext(AppContext),
    {screenDimensions, isFullScreenVideo} = state,
    screenHeight = screenDimensions.window.height,
    screenWidth = screenDimensions.window.width,
    dismissTimerId = state.dismissTimerId,
    width = React.useRef(new Animated.Value(screenWidth)).current,
    height = React.useRef(new Animated.Value(screenHeight)).current;

  //This useEffect needs to be above others so overlay wouldn't
  //be overriden to false
  React.useEffect(() => {
    Dimensions.addEventListener('change', onScreenRotation);
    toggleScreenModes();
    return () => {
      Dimensions.removeEventListener('change', onScreenRotation);
    };
  }, [isFullScreenVideo]);

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
    // Show overlay on initial screen load
    dispatch({
      type: actionTypes.SET_OVERLAY_VIEW,
      payload: true,
    });
  }, []);

  const toggleScreenModes = () => {
    if (isFullScreenVideo) {
      Orientation.lockToLandscape();
      clearTimeout(dismissTimerId);
      dispatch({
        type: actionTypes.SET_OVERLAY_VIEW,
        payload: false,
      });
    } else {
      Orientation.lockToPortrait();
      clearTimeout(dismissTimerId);
      dispatch({
        type: actionTypes.SET_OVERLAY_VIEW,
        payload: false,
      });
    }
  };

  const onScreenRotation = ({window, screen}) => {
    dispatch({
      type: actionTypes.SET_SCREEN_DIMENSIONS,
      payload: {window: window, screen: screen},
    });
  };

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
