import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import Sound from 'react-native-sound';

const CustomAudioPlayer = ({url}) => {
  const playRemoteURLSoundFile = () => {
    Sound.setCategory('Playback');

    let myRemoteSound = new Sound(url, null, error => {
      if (error) {
        return console.log(error);
      } else {
        myRemoteSound.play(success => {
          if (success) {
            console.log('Sound playing');
          } else {
            console.log('Issue playing url');
          }
        });
      }
    });
    myRemoteSound.setVolume(0.9);
    myRemoteSound.release();
  };
  return (
    <View>
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          style={{backgroundColor: 'grey', justifyContent: 'center'}}
          onPress={playRemoteURLSoundFile}>
          <Text style={styles.audioPlayer}>AUDIO COMPONENT</Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              padding: 10,
            }}>
            Play sound
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomAudioPlayer;

const styles = StyleSheet.create({
  audioPlayer: {margin: 25, color: '#bc9665', fontFamily: 'Roboto-Medium'},
});
