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

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const CustomVideoPlayer = ({videoUrl, imageUrl}) => {
  const [state, dispatch] = React.useContext(AppContext);
  const [dimensions, setDimensions] = React.useState({window, screen});
  const [isOverlayView, setIsOverlayView] = React.useState(true);
  const [isVideoPaused, setIsVideoPaused] = React.useState(true);

  console.log(state.currentVideoPlayTime);
  const {isFullScreenVideo} = state;

  let {height, width} = dimensions.window;

  const onScreenRotation = ({window, screen}) => {
    setDimensions({window, screen});
  };

  React.useEffect(() => {
    Dimensions.addEventListener('change', onScreenRotation);
    // temporary way of rotating screen
    if (isFullScreenVideo) {
      dispatch({type: 'FULL_SCREEN_VIDEO', payload: true});
      FullScreen.enable();
      Orientation.lockToLandscape();
    } else {
      dispatch({type: 'FULL_SCREEN_VIDEO', payload: false});
      FullScreen.disable();
      Orientation.lockToPortrait();
    }

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
