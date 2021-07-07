import React from 'react';

import videoPlayerInitialState from './video.player.initialState';
import {VideoPlayerContext} from './video.player.context';
import videoPlayerReducer from './video.player.context.reducer';

export const VideoPlayerContextProvider = props => {
  const [videoPlayerState, dispatchToVideoPlayerContext] = React.useReducer(
    videoPlayerReducer,
    videoPlayerInitialState,
  );
  return (
    <VideoPlayerContext.Provider
      value={[videoPlayerState, dispatchToVideoPlayerContext]}>
      {props.children}
    </VideoPlayerContext.Provider>
  );
};
