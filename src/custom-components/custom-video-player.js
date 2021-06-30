import React from 'react';
import {Dimensions} from 'react-native';
import Orientation from 'react-native-orientation';

import timeFormat from '../utils/trackPlayerUtils';
import FullScreen from '../utils/fullScreen';
import {AppContext} from '../context/app.context';
import CustomVideoPlayerMediaPlayer from './custom-video-player-media-player';
import CustomVideoPlayerSlider from './custom-video-player-slider';
import CustomVideoPlayerFullscreenProvider from './custom-video-player-fullscreen-provider';
import CustomVideoPlayerLayersProvider from './custom-video-player-layers-provider';

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
    <CustomVideoPlayerFullscreenProvider
      fullscreenMode={fullscreen}
      screenWidth={width}
      screenHeight={height}>
      <CustomVideoPlayerMediaPlayer
        videoUrl={videoUrl}
        imageUrl={imageUrl}
        isVideoPaused={isVideoPaused}
      />
      <CustomVideoPlayerSlider fullscreenMode={fullscreen} />
      <CustomVideoPlayerLayersProvider
        isOverlayView={isOverlayView}
        isVideoPaused={isVideoPaused}
      />
    </CustomVideoPlayerFullscreenProvider>
  );
};

export default CustomVideoPlayer;
