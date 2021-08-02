import React from 'react';
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AppContext} from './../../context/app.context';
import {VideoPlayerContext} from './video-player-context/video.player.context';
import {actionTypes} from './../../context/action.types';
import MediaPlayer from './media-player';
import {handleDoubleTap} from './../../utils/trackPlayerUtils';
import {videoPlayerActionTypes} from './video-player-context/video.player.action.types';

const PlayerLayersProvider = props => {
  const [state, dispatch] = React.useContext(AppContext),
    [videoPlayerState, dispatchToVideoPlayer] = React.useContext(
      VideoPlayerContext,
    ),
    {isOverlayView, isVideoPaused, dismissTimerId, isTrackPlaying} = state,
    {currentVideoPlayTime, videoDuration, videoPlayer} = videoPlayerState;

  // Pause video and show overlay when track starts playing
  React.useEffect(() => {
    if (isTrackPlaying) {
      dispatch({
        type: actionTypes.SET_PAUSE_VIDEO,
        payload: true,
      });
      dispatch({
        type: actionTypes.SET_OVERLAY_VIEW,
        payload: true,
      });
    }
  }, [isTrackPlaying]);

  const setUpDismissTimer = () => {
    clearTimeout(dismissTimerId);
    let timerId = setTimeout(() => {
      dispatch({
        type: actionTypes.TOGGLE_OVERLAY_VIEW,
      });
    }, 3000);
    dispatch({
      type: actionTypes.SET_DISMISS_TIMER_ID,
      payload: timerId,
    });
  };

  const closeOverlay = () => {
    clearTimeout(dismissTimerId);
    dispatch({
      type: actionTypes.TOGGLE_OVERLAY_VIEW,
    });
  };

  const handlePlayPausePress = () => {
    setUpDismissTimer();
    dispatch({
      type: actionTypes.TOGGLE_PAUSE_VIDEO,
    });
  };

  const handleSkipForward_10 = () => {
    setUpDismissTimer();

    if (currentVideoPlayTime >= videoDuration) {
      setCurrentTime(duration);
      dispatchToVideoPlayer({
        type: videoPlayerActionTypes.SET_VIDEO_DURATION,
        payload: videoDuration,
      });
      return;
    }
    videoPlayer.seek(currentVideoPlayTime + 10);
    dispatchToVideoPlayer({
      type: videoPlayerActionTypes.SET_CURRENT_VIDEO_PLAY_TIME,
      payload: currentVideoPlayTime + 10,
    });
  };
  const handleSkipBackward_10 = () => {
    setUpDismissTimer();

    if (currentVideoPlayTime <= 10) {
      videoPlayer.seek(0.1);
      dispatchToVideoPlayer({
        type: videoPlayerActionTypes.SET_CURRENT_VIDEO_PLAY_TIME,
        payload: 0,
      });
      return;
    }
    videoPlayer.seek(currentVideoPlayTime - 10);
    dispatchToVideoPlayer({
      type: videoPlayerActionTypes.SET_CURRENT_VIDEO_PLAY_TIME,
      payload: currentVideoPlayTime - 10,
    });
  };

  const hiddenJumpFrontward = () => {
    if (currentVideoPlayTime >= videoDuration) {
      return dispatchToVideoPlayer({
        type: videoPlayerActionTypes.SET_CURRENT_VIDEO_PLAY_TIME,
        payload: videoDuration,
      });
    }
    handleDoubleTap(
      () => {
        videoPlayer.seek(currentVideoPlayTime + 10);
        dispatchToVideoPlayer({
          type: videoPlayerActionTypes.SET_CURRENT_VIDEO_PLAY_TIME,
          payload: currentVideoPlayTime + 10,
        });
      },
      () => {
        setUpDismissTimer();
        dispatch({
          type: actionTypes.TOGGLE_OVERLAY_VIEW,
        });
      },
    );
    return null;
  };

  const hiddenJumpBackward = () => {
    if (currentVideoPlayTime <= 10) {
      videoPlayer.seek(0.1);
      return dispatchToVideoPlayer({
        type: videoPlayerActionTypes.SET_CURRENT_VIDEO_PLAY_TIME,
        payload: 0,
      });
    }
    handleDoubleTap(
      () => {
        videoPlayer.seek(currentVideoPlayTime - 10);
        dispatchToVideoPlayer({
          type: videoPlayerActionTypes.SET_CURRENT_VIDEO_PLAY_TIME,
          payload: currentVideoPlayTime - 10,
        });
      },
      () => {
        setUpDismissTimer();
        dispatch({
          type: actionTypes.TOGGLE_OVERLAY_VIEW,
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
          <Pressable style={styles.iconContainer} onPress={closeOverlay}>
            {/* Overlay View Controllers */}
            <Icon
              name="skip-backward"
              onPress={handleSkipBackward_10}
              style={styles.icon}
            />
            <Icon
              name={isVideoPaused ? 'play' : 'pause'}
              onPress={handlePlayPausePress}
              style={styles.icon}
            />
            <Icon
              name="skip-forward"
              onPress={handleSkipForward_10}
              style={styles.icon}
            />
            <View style={styles.childrenContainer}>{props.children}</View>
          </Pressable>
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
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0006',
  },
  icon: {
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
