export const initialState = {
  isFullScreenVideo = false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "FULL_SCREEN_VIDEO":
      return {
        isFullScreenVideo: action.payload,
      };
      case "HORIZONTAL_VIEW_VIDEO": 
      return {
        isFullScreenVideo: action.payload,
      };
      default: 
      state;
  }
}