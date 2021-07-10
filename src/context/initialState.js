import {Dimensions} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const initialState = {
  isFullScreenVideo: false,
  // might not be needed
  isHorisontalVideoView: false,
  isVideoPaused: true,
  isOverlayView: true,
  screenDimensions: {window: window, screen: screen},
  articleVideoUrl: '',
  articleImageUrl: '',
};

export default initialState;
