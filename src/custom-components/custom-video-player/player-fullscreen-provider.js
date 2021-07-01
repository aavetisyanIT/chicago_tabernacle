import React from 'react';
import {StyleSheet, View} from 'react-native';

const PlayerFullscreenProvider = props => {
  const {fullscreenMode, screenWidth, screenHeight} = props;
  return (
    <View
      style={
        fullscreenMode
          ? {
              ...styles.fullscreenContainer,
              // adding 1 to hide little stripe
              height: screenHeight + 1,
            }
          : {
              ...styles.container,
              width: screenWidth,
              height: screenWidth * 0.5625,
            }
      }>
      {props.children}
    </View>
  );
};

export default PlayerFullscreenProvider;

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 9},
  fullscreenContainer: {
    flex: 1,
  },
});
