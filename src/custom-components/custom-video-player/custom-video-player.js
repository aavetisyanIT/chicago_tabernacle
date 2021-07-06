import React from 'react';

import MediaPlayer from './media-player';
import PlayerSlider from './player-slider';
import PlayerFullscreenProvider from './player-fullscreen-provider';
import PlayerLayersProvider from './player-layers-provider';

let count = 0;

const CustomVideoPlayer = ({videoUrl, imageUrl}) => {
  count = count + 1;
  console.log(`CustomVideoPlayer: ${count}`);
  //  currentVideoPlayTime and videoDuration  state variables need to be move to
  // own context and provided to only PlayerSlider and MediaPlayer components to
  // reduce rerenders when play is running.
  return (
    <PlayerFullscreenProvider>
      <MediaPlayer videoUrl={videoUrl} imageUrl={imageUrl} />
      <PlayerSlider />
      <PlayerLayersProvider />
    </PlayerFullscreenProvider>
  );
};

export default CustomVideoPlayer;
