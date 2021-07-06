import timeFormat from './../utils/trackPlayerUtils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FULLSCREEN_VIDEO':
      return {...state, isFullScreenVideo: action.payload};
    case 'SET_CURRENT_VIDEO_PLAY_TIME':
      return {
        ...state,
        currentVideoPlayTime: timeFormat(action.currentTime),
      };
    case 'TOGGLE_PAUSE_VIDEO':
      return {...state, isVideoPaused: !state.isVideoPaused};
    case 'SET_OVERLAY_VIEW':
      return {...state, isOverlayView: action.payload};
    case 'SET_SCREEN_DIMENSIONS':
      return {
        ...state,
        screenDimensions: {
          window: action.payload.window,
          screen: action.payload.screen,
        },
      };
    case 'SET_VIDEO_DURATION':
      return {...state, videoDuration: timeFormat(action.videoDuration)};
    default:
      throw new Error();
  }
};

export default reducer;
