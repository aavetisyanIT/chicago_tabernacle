import React from 'react';

import PlayerSlider from './player-slider';
import PlayerFullscreenProvider from './player-fullscreen-provider';
import PlayerLayersProvider from './player-layers-provider';
import {VideoPlayerContextProvider} from './video-player-context/video.player.context.provider';

let count = 0;
const CustomVideoPlayer = () => {
  count = count + 1;
  // console.log(`CustomVideoPlayer: ${count}`);

  return (
    <PlayerFullscreenProvider>
      <VideoPlayerContextProvider>
        <PlayerLayersProvider>
          <PlayerSlider />
        </PlayerLayersProvider>
      </VideoPlayerContextProvider>
    </PlayerFullscreenProvider>
  );
};

export default CustomVideoPlayer;
