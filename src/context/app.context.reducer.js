import {actionTypes} from './action.types';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_FULLSCREEN_VIDEO:
      return {...state, isFullScreenVideo: action.payload};
    case actionTypes.TOGGLE_FULLSCREEN_VIDEO:
      return {...state, isFullScreenVideo: !state.isFullScreenVideo};
    case actionTypes.HORIZONTAL_VIEW_VIDEO:
      return {...state, isHorisontalVideoView: action.payload};
    case actionTypes.TOGGLE_PAUSE_VIDEO:
      return {...state, isVideoPaused: !state.isVideoPaused};
    case actionTypes.SET_OVERLAY_VIEW:
      return {...state, isOverlayView: !state.isOverlayView};
    case actionTypes.SET_SCREEN_DIMENSIONS:
      return {
        ...state,
        screenDimensions: {
          window: action.payload.window,
          screen: action.payload.screen,
        },
      };
    default:
      throw new Error();
  }
};

export default reducer;
