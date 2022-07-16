import {STATE_PAUSED} from 'react-native-track-player';
import {actionTypes} from './action.types';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {...state, user: action.payload};
    case actionTypes.SET_INITIALIZING_AUTH:
      return {...state, initializingAuth: action.payload};
    case actionTypes.SET_FULLSCREEN_VIDEO:
      return {...state, isFullScreenVideo: action.payload};
    case actionTypes.TOGGLE_FULLSCREEN_VIDEO:
      return {...state, isFullScreenVideo: !state.isFullScreenVideo};
    case actionTypes.HORIZONTAL_VIEW_VIDEO:
      return {...state, isHorisontalVideoView: action.payload};
    case actionTypes.TOGGLE_PAUSE_VIDEO:
      return {
        ...state,
        isVideoPaused: !state.isVideoPaused,
      };
    case actionTypes.SET_PAUSE_VIDEO:
      return {...state, isVideoPaused: action.payload};
    case actionTypes.TOGGLE_OVERLAY_VIEW:
      return {...state, isOverlayView: !state.isOverlayView};
    case actionTypes.SET_OVERLAY_VIEW:
      return {...state, isOverlayView: action.payload};
    case actionTypes.SET_SCREEN_DIMENSIONS:
      return {
        ...state,
        screenDimensions: {
          window: action.payload.window,
          screen: action.payload.screen,
        },
      };
    case actionTypes.SET_ARTICLE_VIDEO_URL:
      return {
        ...state,
        articleVideoUrl: action.payload,
      };
    case actionTypes.SET_ARTICLE_IMAGE_URL:
      return {
        ...state,
        articleImageUrl: action.payload,
      };
    case actionTypes.SET_DISMISS_TIMER_ID:
      return {
        ...state,
        dismissTimerId: action.payload,
      };
    case actionTypes.SET_TRACK_PLAYING:
      return {
        ...state,
        isTrackPlaying: action.payload,
      };
    case actionTypes.SET_CURRENT_ARTICLE_ID:
      return {...state, currentArticleId: action.payload};
    case actionTypes.SET_USER_UID:
      return {...STATE_PAUSED, userUid: action.payload};
    default:
      throw new Error();
  }
};

export default reducer;
