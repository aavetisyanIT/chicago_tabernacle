import React, {useReducer, createContext} from 'react'

export const AppContext = createContext();

const initialState = {
  isFullScreenVideo = false,
}

const reducer = (state, action) => {
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
