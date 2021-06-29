import React from 'react';
import {StyleSheet, View} from 'react-native';

const CustomVideoPlayerFullscreenProvider = props => {
  const {fullscreenMode, screenWidth, screenHeight} = props;
  return (
    <View
      style={
        fullscreenMode
          ? {
              ...styles.fullscreenContainer,
              height: screenHeight,
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

export default CustomVideoPlayerFullscreenProvider;

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 9, backgroundColor: 'black'},
  fullscreenContainer: {
    flex: 1,
    // this style was in fullScreenMode of alpha version
    // fullScreenMode was deleted
    // ...StyleSheet.absoluteFill,
    margin: -1,
    backgroundColor: 'black',
    width: '100%',
  },
});
