import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomAudioPlayer = () => {
  return <Text style={styles.audioPlayer}>AUDIO COMPONENT</Text>;
};

export default CustomAudioPlayer;

const styles = StyleSheet.create({
  audioPlayer: {margin: 25, color: '#bc9665', fontFamily: 'Roboto-Medium'},
});
