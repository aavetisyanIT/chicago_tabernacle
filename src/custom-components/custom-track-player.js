import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer, {
  TrackPlayerEvents,
  STATE_PLAYING,
  STATE_NONE,
  STATE_PAUSED,
} from 'react-native-track-player';
import {
  useTrackPlayerProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {AppContext} from './../context/app.context';
import {actionTypes} from './../context/action.types';
import CustomButton from './custom-button';
import {timeFormat, trackPlayerInit} from './../utils/trackPlayerUtils';

const CustomTrackPlayer = ({
  title,
  url,
  trackPlayerVisible,
  showTrackPlayer,
  hideTrackPlayer,
  trackId,
  image,
}) => {
  //state to manage whether track player is initialized or not
  //The play button stays disabled if the Track Player isn't initialized.
  const [state, dispatch] = React.useContext(AppContext),
    {isTrackPlaying, isVideoPaused} = state,
    [isTrackPlayerInit, setIsTrackPlayerInit] = React.useState(false),
    [timeStamp, setTimeStamp] = React.useState('00:00'),
    [trackTime, setTrackTime] = React.useState('00:00'),
    //the value of the slider should be between 0 and 1
    [sliderValue, setSliderValue] = React.useState(0),
    //flag to check whether the use is sliding the seekbar or not
    [isSeeking, setIsSeeking] = React.useState(false),
    //useTrackPlayerProgress is a hook which provides the current position
    //and duration of the track player. These values will update every 250ms
    {position, duration} = useTrackPlayerProgress(250);

  // Pause media when video starts playing
  React.useEffect(() => {
    if (!isVideoPaused) {
      dispatch({
        type: actionTypes.SET_TRACK_PLAYING,
        payload: false,
      });
      TrackPlayer.pause();
    }
  }, [isVideoPaused]);

  //initialize the TrackPlayer when "AUDIO PLAYER" is clicked
  React.useEffect(() => {
    const startPlayer = async () => {
      try {
        //function to initialize the Track Player
        let isInit = await trackPlayerInit(url, trackId, title, image);
        setIsTrackPlayerInit(isInit);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (trackPlayerVisible) startPlayer();
  }, [trackPlayerVisible]);

  //this hook updates the value of the slider whenever
  //the current position of the song changes
  React.useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
    setTimeStamp(timeFormat(position));
    setTrackTime(timeFormat(duration));
  }, [position]);

  //Unmount track player when leaving a sceen
  React.useEffect(() => {
    return () => {
      TrackPlayer.destroy();
    };
  }, []);

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], event => {
    if (event.state === STATE_PLAYING) {
      dispatch({
        type: actionTypes.SET_TRACK_PLAYING,
        payload: true,
      });
    } else if (event.state === STATE_NONE) {
      hideTrackPlayer();
      setTimeStamp('00:00');
      setSliderValue(0);
    } else if (event.state === STATE_PAUSED) {
      dispatch({
        type: actionTypes.SET_TRACK_PLAYING,
        payload: false,
      });
    }
  });

  //start playing the TrackPlayer when the play button is pressed
  const onPlayButtonPressed = async () => {
    if (!isTrackPlaying) {
      try {
        //line 134-136 sets position of player if slided is used before play pressed first time
        const trackDuration = await TrackPlayer.getDuration();
        await TrackPlayer.seekTo(sliderValue * trackDuration);
        setTimeStamp(timeFormat(sliderValue * trackDuration));
        await TrackPlayer.play();
        dispatch({
          type: actionTypes.SET_TRACK_PLAYING,
          payload: true,
        });
      } catch (error) {
        console.log(error.message);
      }
    } else {
      TrackPlayer.pause();
      dispatch({
        type: actionTypes.SET_TRACK_PLAYING,
        payload: false,
      });
    }
  };

  //this function is called when the user starts to slide the seekbar
  const slidingStarted = () => {
    setIsSeeking(true);
  };

  //this function is called when the user stops sliding the seekbar
  const slidingCompleted = async value => {
    try {
      await TrackPlayer.seekTo(value * duration);
      setSliderValue(value);
      setTimeStamp(timeFormat(value * duration));
      setIsSeeking(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const playIcon = <Icon name="play-arrow" size={30} color="#fff" />,
    pauseIcon = <Icon name="pause" size={30} color="#fff" />;

  return trackPlayerVisible ? (
    <View style={styles.container}>
      <Text style={styles.text}>{timeStamp || '00:00'}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={sliderValue}
        minimumTrackTintColor="black"
        maximumTrackTintColor="white"
        thumbTintColor="black"
        onSlidingStart={slidingStarted}
        onSlidingComplete={slidingCompleted}
      />
      <Text style={styles.text}>{trackTime}</Text>
      <TouchableOpacity style={styles.buttons} onPress={onPlayButtonPressed}>
        {isTrackPlaying ? pauseIcon : playIcon}
      </TouchableOpacity>
    </View>
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#bc9665',
    height: 60,
  },
  text: {
    marginHorizontal: 10,
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  slider: {width: '55%', height: 5, backgroundColor: '#bc9665'},
  buttons: {marginLeft: 0},
  audioButton: {flexDirection: 'row', backgroundColor: '#fff', margin: 12},
  audioButtonText: {
    color: '#bc9665',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    marginHorizontal: 5,
  },
});
