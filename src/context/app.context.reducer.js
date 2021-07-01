export const initialState = {
  isFullScreenVideo: false,
  currentVideoPlayTime: 0,
  isVideoPaused: true,
  isOverlayView: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FULL_SCREEN_VIDEO':
      return {
        isFullScreenVideo: action.payload,
      };
    case 'CURRENT_VIDEO_PLAY_TIME':
      return {
        currentVideoPlayTime: action.payload,
      };
    case 'VIDEO_PAUSED':
      return {
        isVideoPaused: action.payload,
      };
    case 'OVERLAY_VIEW':
      return {
        isOverlayView: action.payload,
      };
    default:
      state;
  }
};
