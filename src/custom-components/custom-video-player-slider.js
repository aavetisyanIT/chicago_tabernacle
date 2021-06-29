import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CustomVideoPlayerSlider = ({currentTime}) => {
  return (
    <View style={styles.sliderContainer}>
      <Text>{currentTime}</Text>
      {/* <View style={styles.timeStampsContainer}>
        <Text style={styles.durationTimeText}>{timeFormat(duration)}</Text>
        <View style={styles.timeStampsInnerContainer}>
          <Text style={styles.currentTimeText}>{timeFormat(currentTime)} </Text>
          <Icon
            style={styles.fullscreenIcon}
            onPress={handleFullScreen}
            size={25}
            name={fullScreen ? 'fullscreen-exit' : 'fullscreen'}
          />
        </View>
      </View>
      <Slider
        maximumTrackImage="white"
        minimumTrackTintColor="#bc9665"
        thumbTintColor="white"
        value={currentTime / duration}
        onValueChange={handleSlide}
      /> */}
    </View>
  );
};

export default CustomVideoPlayerSlider;

const styles = StyleSheet.create({
  sliderContainer: {position: 'absolute', left: 5, right: 0, bottom: 10},
});
