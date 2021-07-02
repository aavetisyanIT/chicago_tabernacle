import {Dimensions} from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export const initialState = {
  isFullScreenVideo: false,
  currentVideoPlayTime: 0,
  isVideoPaused: true,
  isOverlayView: true,
  screenDimensions: {window: window, screen: screen},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FULLSCREEN_VIDEO':
      return {...state, isFullScreenVideo: action.payload};
    case 'SET_CURRENT_VIDEO_PLAY_TIME':
      return {...state, currentVideoPlayTime: action.payload};
    case 'PAUSE_VIDEO':
      return {...state, isVideoPaused: action.payload};
    case 'SET_OVERLAY_VIEW':
      return {...state, isOverlayView: action.payload};
    case 'SET_SCREEN_DIMENSIONS':
      return {...state, screenDimensions: action.payload};
    default:
      return state;
  }
};
