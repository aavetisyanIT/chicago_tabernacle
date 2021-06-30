import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomVideoPlayerLayersProvider = props => {
  const {isVideoPaused, isOverlayView} = props;

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
            // onPress={handlePlayPausePress}
          />
          <Icon
            name="skip-forward"
            style={styles.icon}
            // onPress={handleSkipForward_10}
          />
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

export default CustomVideoPlayerLayersProvider;

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
});
