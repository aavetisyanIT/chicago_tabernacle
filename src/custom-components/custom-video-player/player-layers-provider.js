import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AppContext} from './../../context/app.context';
import {actionTypes} from './../../context/action.types';

const PlayerLayersProvider = () => {
  const [state, dispatch] = React.useContext(AppContext);

  const {
    isOverlayView,
    isVideoPaused,
    isFullScreenVideo,
    screenDimensions,
  } = state;

  const screenWidth = screenDimensions.window.width;

  const handlePlayPausePress = () => {
    dispatch({
      type: actionTypes.TOGGLE_PAUSE_VIDEO,
    });
  };

  const handleCloseIconPress = () => {
    //  setOverlay(false);
    null;
  };

  return (
    <View style={styles.overlayContainer}>
      {isOverlayView ? (
        <View style={styles.iconContainer}>
          {/* Overlay View Controllers */}
          <Icon
            name="skip-backward"
            style={styles.icon}
            // onPress={handleSkipBackward_10}
          />
          <Icon
            name={isVideoPaused ? 'play' : 'pause'}
            style={styles.icon}
            onPress={handlePlayPausePress}
          />
          <Icon
            name="skip-forward"
            style={styles.icon}
            // onPress={handleSkipForward_10}
          />
          <View
            style={
              isFullScreenVideo
                ? {...styles.closeIconContainer, left: screenWidth}
                : {...styles.closeIconContainer, left: screenWidth * 0.9}
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
        /* Hidden View Controllers */
        <View style={styles.hiddenControllersContainer}>
          <TouchableNativeFeedback /*onPress={hiddenJumpBackward}*/>
            <View style={styles.hiddenController}></View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback /*onPress={hiddenJumpFrontward}*/>
            <View style={styles.hiddenController}></View>
          </TouchableNativeFeedback>
        </View>
      )}
    </View>
  );
};

export default PlayerLayersProvider;

const styles = StyleSheet.create({
  overlayContainer: {...StyleSheet.absoluteFill},
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
  hiddenControllersContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  hiddenController: {flex: 1},
  closeIconContainer: {
    position: 'absolute',
    top: 0,
    margin: 5,
  },
  closeIcon: {color: 'white'},
});
