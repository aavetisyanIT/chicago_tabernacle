import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import CustomButton from './custom-button';

const CustomTrackPlayer = ({url, trackPlayerVisible, showTrackPlayer}) => {
  //function to initialize the Track Player
  const trackPlayerInit = async url => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: '1',
      url: url,
      type: 'default',
      // title: 'My Title',
      // album: 'My Album',
      // artist: 'Rohan Bhatia',
      // artwork: 'https://picsum.photos/100',
    });
    return true;
  };

  //state to manage whether track player is initialized or not
  const [isTrackPlayerInit, setIsTrackPlayerInit] = React.useState(false);

  //initialize the TrackPlayer when the App component is mounted
  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit(url);
      setIsTrackPlayerInit(isInit);
    };
    startPlayer();
  }, []);

  //start playing the TrackPlayer when the button is pressed
  const onPlayButtonPressed = () => {
    TrackPlayer.play();
  };

  return trackPlayerVisible ? (
    <TouchableOpacity
      style={styles.container}
      onPress={onPlayButtonPressed}
      // works on Button not TouchableOpacity
      // disabled={!isTrackPlayerInit}
    >
      <Text style={styles.trackPlayer}>Play</Text>
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
