import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer, {
  TrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player';
import {
  useTrackPlayerProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';

import CustomButton from './custom-button';

//We get the total duration of the song every 250ms
//even though the duration doesn’t change – need to be optimized later).

const CustomTrackPlayer = ({
  title,
  url,
  trackPlayerVisible,
  showTrackPlayer,
  trackId,
  image,
}) => {
  //state to manage whether track player is initialized or not
  //The play button stays disabled if the Track Player isn't initialized.
  const [isTrackPlayerInit, setIsTrackPlayerInit] = React.useState(false);

  const [isPlaying, setIsPlaying] = React.useState(false);

  //the value of the slider should be between 0 and 1
  const [sliderValue, setSliderValue] = React.useState(0);

  //flag to check whether the use is sliding the seekbar or not
  const [isSeeking, setIsSeeking] = React.useState(false);

  //useTrackPlayerProgress is a hook which provides the current position
  //and duration of the track player. These values will update every 250ms
  const {position, duration} = useTrackPlayerProgress(250);

  //function to initialize the Track Player
  const trackPlayerInit = async url => {
    await TrackPlayer.setupPlayer();
    //Controlling The Music From Outside
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_JUMP_FORWARD,
        TrackPlayer.CAPABILITY_JUMP_BACKWARD,
      ],
    });
    await TrackPlayer.add({
      id: trackId,
      url: url,
      type: 'default',
      title: title,
      artwork: image,
    });
    return true;
  };

  //initialize the TrackPlayer when the App component is mounted
  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit(url);
      setIsTrackPlayerInit(isInit);
    };
    startPlayer();
  }, []);

  //this hook updates the value of the slider whenever
  //the current position of the song changes
  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], event => {
    if (event.state === STATE_PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  });

  //start playing the TrackPlayer when the button is pressed
  const onPlayButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };

  //this function is called when the user starts to slide the seekbar
  const slidingStarted = () => {
    setIsSeeking(true);
  };

  //this function is called when the user stops sliding the seekbar
  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  return trackPlayerVisible ? (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={onPlayButtonPressed}
        // works on Button not TouchableOpacity
        // disabled={!isTrackPlayerInit}
      >
        <Text style={styles.trackPlayer}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
      <Slider
        style={{width: 400, height: 40}}
        minimumValue={0}
        maximumValue={1}
        value={sliderValue}
        minimumTrackTintColor="#111000"
        maximumTrackTintColor="#000000"
        onSlidingStart={slidingStarted}
        onSlidingComplete={slidingCompleted}
      />
    </>
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
