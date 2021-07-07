import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import FullScreen from './../../utils/fullScreen';
import {AppContext} from './../../context/app.context';
import {actionTypes} from './../../context/action.types';

let count = 0;
const PlayerFullscreenProvider = props => {
  count = count + 1;
  console.log(`PlayerFullscreenProvider: ${count}`);

  const [state, dispatch] = React.useContext(AppContext);

  const {screenDimensions, isFullScreenVideo} = state;
  const screenHeight = screenDimensions.window.height;
  const screenWidth = screenDimensions.window.width;

  const onScreenRotation = ({window, screen}) => {
    dispatch({
      type: actionTypes.SET_SCREEN_DIMENSIONS,
      payload: {window: window, screen: screen},
    });
  };

  React.useEffect(() => {
    Dimensions.addEventListener('change', onScreenRotation);
    return () => {
      Dimensions.removeEventListener('change', onScreenRotation);
    };
  }, [isFullScreenVideo]);

  return (
    <View
      style={
        isFullScreenVideo
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
