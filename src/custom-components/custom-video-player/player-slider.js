import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PlayerSlider = ({currentTime, fullscreenMode}) => {
  return (
    <View style={styles.sliderContainer}>
      <View style={styles.timeStampsContainer}>
        {/* <Text style={styles.durationTimeText}>{timeFormat(duration)}</Text> */}
        <Text style={styles.durationTimeText}>00:00</Text>
        <View style={styles.timeStampsInnerContainer}>
          {/* <Text style={styles.currentTimeText}>{timeFormat(currentTime)} </Text> */}
          <Text style={styles.currentTimeText}>00:00 </Text>
          <Icon
            style={styles.fullscreenIcon}
            // onPress={handleFullScreen}
            size={25}
            name={fullscreenMode ? 'fullscreen-exit' : 'fullscreen'}
          />
        </View>
      </View>
      <Slider
        maximumTrackImage="white"
        minimumTrackTintColor="#bc9665"
        thumbTintColor="white"
        // value={currentTime / duration}
        // onValueChange={handleSlide}
      />
    </View>
  );
};

export default PlayerSlider;

const styles = StyleSheet.create({
  sliderContainer: {position: 'absolute', left: 5, right: 0, bottom: 10},
});
