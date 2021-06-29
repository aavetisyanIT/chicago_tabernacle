import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Orientation from 'react-native-orientation';

import timeFormat from '../utils/trackPlayerUtils';
import FullScreen from '../utils/fullScreen';
import {AppContext} from '../context/app.context';
import CustomVideoPlayerTracker from './custom-video-player-tracker';
import CustomVideoPlayerSlider from './custom-video-player-slider';
import CustomVideoPlayerFullscreenProvider from './custom-video-player-fullscreen-provider';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const CustomVideoPlayer = ({videoUrl, imageUrl}) => {
  const [fullscreen, setFullscreen] = React.useState(false);
  const [dimensions, setDimensions] = React.useState({window, screen});

  let {height, width} = dimensions.window;

  return (
    <CustomVideoPlayerFullscreenProvider
      fullscreenMode={fullscreen}
      screenWidth={width}
      screenHeight={height}>
      <Text>Video Player</Text>
    </CustomVideoPlayerFullscreenProvider>
  );
};

export default CustomVideoPlayer;

const styles = StyleSheet.create({});
