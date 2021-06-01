import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome5';

const {width} = Dimensions.get('window');

const CustomVideoPlayer = ({videoUrl, imageUrl}) => {
  const [paused, setPaused] = React.useState(false);
  const [overlay, setOverlay] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.videoPlayerContainer}>
        <Video
          paused={!paused}
          style={{...StyleSheet.absoluteFill}}
          source={{uri: videoUrl}}
          resizeMode="cover"
          poster={imageUrl}
          ref={ref => (Video.player = ref)}
          onLoad={Video.load}
          onProgress={Video.progress}
        />
        <View style={styles.overlay}>
          {!overlay ? (
            //shade effect
            <View style={{...styles.overlaySet, backgroundColor: '#0006'}}>
              {/* Controllers */}
              {/* backward is not working */}
              <Icon
                name="backward"
                style={styles.icon}
                onPress={Video.backward}
              />
              <Icon
                name={paused ? 'play' : 'pause'}
                style={styles.icon}
                onPress={() => setPaused(currentPaused => !currentPaused)}
              />
              {/* forward is not working */}
              <Icon
                name="forward"
                style={styles.icon}
                onPress={Video.forward}
              />
            </View>
          ) : (
            <View style={styles.overlaySet}></View>
          )}
        </View>
      </View>
    </View>
  );
};

export default CustomVideoPlayer;

const styles = StyleSheet.create({
  container: {flex: 1},
  videoPlayerContainer: {
    width,
    height: width * 0.56,
    backgroundColor: 'black',
  },
  overlay: {...StyleSheet.absoluteFill},
  overlaySet: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
  },
});
