import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import CustomButton from './custom-button';

const CustomTrackPlayer = ({url, trackPlayerVisible, showTrackPlayer}) => {
  return trackPlayerVisible ? (
    <TouchableOpacity style={styles.container} onPress={null}>
      <Text style={styles.trackPlayer}>Play sound</Text>
    </TouchableOpacity>
  ) : (
    <CustomButton
      style={styles.audioButton}
      title="AUDIO PLAYER"
      textStyle={styles.audioButtonText}
      icon="volume-high-outline"
      iconSize={20}
      onPress={showTrackPlayer}
    />
  );
};

export default CustomTrackPlayer;

const styles = StyleSheet.create({
  container: {marginTop: 10, backgroundColor: 'grey', justifyContent: 'center'},
  trackPlayer: {
    margin: 15,
    color: '#bc9665',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  audioButton: {flexDirection: 'row', backgroundColor: '#fff', margin: 12},
  audioButtonText: {
    color: '#bc9665',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    marginHorizontal: 5,
  },
});
