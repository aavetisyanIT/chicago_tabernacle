import {Dimensions} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const initialState = {
  user: null,
  initializingAuth: true,
  isFullScreenVideo: false,
  isVideoPaused: true,
  isOverlayView: true,
  screenDimensions: {window: window, screen: screen},
  articleVideoUrl: '',
  articleImageUrl: '',
  dismissTimerId: 0,
  isTrackPlaying: false,
  currentDevotionalParagId: '',
  currentDevotionalId: '',
  currentSermonParagId: '',
  currentSermonId: '',
  userUid: '',
};

export default initialState;
