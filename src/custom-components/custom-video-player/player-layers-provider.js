import React from 'react';
import {StyleSheet, View, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AppContext} from './../../context/app.context';
import {VideoPlayerContext} from './video-player-context/video.player.context';
import {actionTypes} from './../../context/action.types';
import MediaPlayer from './media-player';
import {handleDoubleTap} from './../../utils/trackPlayerUtils';

let count = 0;
const PlayerLayersProvider = props => {
  count = count + 1;
  console.log(`PlayerLayersProvider: ${count}`);

  const [state, dispatch] = React.useContext(AppContext);
  const [videoPlayerState, dispatchToVideoPlayer] = React.useContext(
    VideoPlayerContext,
  );

  const {
    isOverlayView,
    isVideoPaused,
    isFullScreenVideo,
    screenDimensions,
  } = state;

  const {currentVideoPlayTime, videoDuration, videoPlayer} = videoPlayerState;

  const screenWidth = screenDimensions.window.width;

  const handlePlayPausePress = () => {
    dispatch({
      type: actionTypes.TOGGLE_PAUSE_VIDEO,
    });
  };

  const handleCloseIconPress = () => {
    dispatch({
      type: actionTypes.SET_OVERLAY_VIEW,
    });
  };

  const handleSkipForward_10 = () => {
    //  if (currentTime >= duration) {
    //    setCurrentTime(duration);
    //    return;
    //  }
    //  videoPlayer.seek(currentTime + 10);
    //  setCurrentTime(currentTime + 10);
    return null;
  };
  const handleSkipBackward_10 = () => {
    //  if (currentTime <= 10) {
    //    videoPlayer.seek(0.1);
    //    setCurrentTime(0);
    //    return;
    //  }
    //  videoPlayer.seek(currentTime - 10);
    //  setCurrentTime(currentTime - 10);
    return null;
  };

  const hiddenJumpFrontward = () => {
    //  if (currentTime >= duration) {
    //    setCurrentTime(duration);
    //    return;
    //  }
    handleDoubleTap(
      () => {
        //  videoPlayer.seek(currentTime + 10);
        //  setCurrentTime(currentTime + 10);
        return null;
      },
      () => {
        dispatch({
          type: actionTypes.SET_OVERLAY_VIEW,
        });
      },
    );
    return null;
  };
  const hiddenJumpBackward = () => {
    //  if (currentTime <= 10) {
    //    videoPlayer.seek(0.1);
    //    setCurrentTime(0);
    //    return;
    //  }
    handleDoubleTap(
      () => {
        //  videoPlayer.seek(currentTime - 10);
        //  setCurrentTime(currentTime - 10);
        return null;
      },
      () => {
        dispatch({
          type: actionTypes.SET_OVERLAY_VIEW,
        });
      },
    );
    return null;
  };

  return (
    <View style={styles.container}>
      <MediaPlayer />
      <View style={styles.overlayContainer}>
        {isOverlayView ? (
          <View style={styles.iconContainer}>
            {/* Overlay View Controllers */}
            <Icon
              name="skip-backward"
              style={styles.icon}
              onPress={handleSkipBackward_10}
            />
            <Icon
              name={isVideoPaused ? 'play' : 'pause'}
              style={styles.icon}
              onPress={handlePlayPausePress}
            />
            <Icon
              name="skip-forward"
              style={styles.icon}
              onPress={handleSkipForward_10}
            />
            {/* Slider and time stamps */}
            <View style={styles.childrenContainer}>{props.children}</View>
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
            <TouchableNativeFeedback onPress={hiddenJumpBackward}>
              <View style={styles.hiddenController}></View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={hiddenJumpFrontward}>
              <View style={styles.hiddenController}></View>
            </TouchableNativeFeedback>
          </View>
        )}
      </View>
    </View>
  );
};

export default PlayerLayersProvider;

const styles = StyleSheet.create({
  container: {...StyleSheet.absoluteFill},
  overlayContainer: {...StyleSheet.absoluteFill},
  childrenContainer: {
    position: 'absolute',
    left: 5,
    right: 0,
    bottom: 10,
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
