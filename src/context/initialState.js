import {Dimensions} from 'react-native';
import timeFormat from './../utils/trackPlayerUtils';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const initialState = {
  isFullScreenVideo: false,
  currentVideoPlayTime: timeFormat(0),
  videoDuration: timeFormat(0.1),
  isVideoPaused: true,
  isOverlayView: true,
  screenDimensions: {window: window, screen: screen},
};

export default initialState;
