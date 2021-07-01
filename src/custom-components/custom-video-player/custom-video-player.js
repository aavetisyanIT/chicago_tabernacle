import React from 'react';
import {Dimensions} from 'react-native';
import Orientation from 'react-native-orientation';

import timeFormat from '../../utils/trackPlayerUtils';
import FullScreen from '../../utils/fullScreen';
import {AppContext} from '../../context/app.context';
import MediaPlayer from './media-player';
import PlayerSlider from './player-slider';
import PlayerFullscreenProvider from './player-fullscreen-provider';
import PlayerLayersProvider from './player-layers-provider';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const CustomVideoPlayer = ({videoUrl, imageUrl}) => {
  const [state, dispatch] = React.useContext(AppContext);

  const [fullscreen, setFullscreen] = React.useState(false);
  const [dimensions, setDimensions] = React.useState({window, screen});
  const [isOverlayView, setIsOverlayView] = React.useState(true);
  const [isVideoPaused, setIsVideoPaused] = React.useState(true);

  let {height, width} = dimensions.window;

  const onScreenRotation = ({window, screen}) => {
    setDimensions({window, screen});
  };

  React.useEffect(() => {
    Dimensions.addEventListener('change', onScreenRotation);
    // temporary way of rotating screen
    if (fullscreen) {
      dispatch({type: 'HORIZONTAL_VIEW_VIDEO', payload: true});
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
  }, [fullscreen]);

  return (
    <PlayerFullscreenProvider
      fullscreenMode={fullscreen}
      screenWidth={width}
      screenHeight={height}>
      <MediaPlayer
        videoUrl={videoUrl}
        imageUrl={imageUrl}
        isVideoPaused={isVideoPaused}
      />
      <PlayerSlider fullscreenMode={fullscreen} />
      <PlayerLayersProvider
        isOverlayView={isOverlayView}
        isVideoPaused={isVideoPaused}
      />
    </PlayerFullscreenProvider>
  );
};

export default CustomVideoPlayer;
