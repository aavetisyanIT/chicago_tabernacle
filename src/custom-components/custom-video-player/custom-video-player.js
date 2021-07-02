import React from 'react';
import {Dimensions} from 'react-native';
import Orientation from 'react-native-orientation';

import FullScreen from './../../utils/fullScreen';
import MediaPlayer from './media-player';
import PlayerSlider from './player-slider';
import PlayerFullscreenProvider from './player-fullscreen-provider';
import PlayerLayersProvider from './player-layers-provider';
import timeFormat from './../../utils/trackPlayerUtils';
import {AppContext} from './../../context/app.context';

const CustomVideoPlayer = ({videoUrl, imageUrl}) => {
  const [state, dispatch] = React.useContext(AppContext);

  const {
    isFullScreenVideo,
    screenDimensions,
    isOverlayView,
    isVideoPaused,
  } = state;

  let height = screenDimensions.window.height;
  let width = screenDimensions.window.width;

  const onScreenRotation = ({window, screen}) => {
    console.log(window, screen);
    dispatch({
      type: 'SET_SCREEN_DIMENSIONS',
      action: {window, screen},
    });
  };

  React.useEffect(() => {
    Dimensions.addEventListener('change', onScreenRotation);

    return () => {
      Dimensions.removeEventListener('change', onScreenRotation);
    };
  }, [isFullScreenVideo]);

  return (
    <PlayerFullscreenProvider
      fullscreenMode={isFullScreenVideo}
      screenWidth={width}
      screenHeight={height}>
      <MediaPlayer
        videoUrl={videoUrl}
        imageUrl={imageUrl}
        isVideoPaused={isVideoPaused}
      />
      <PlayerSlider fullscreenMode={isFullScreenVideo} />
      <PlayerLayersProvider
        isOverlayView={isOverlayView}
        isVideoPaused={isVideoPaused}
      />
    </PlayerFullscreenProvider>
  );
};

export default CustomVideoPlayer;
