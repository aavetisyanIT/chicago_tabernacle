import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Video from 'react-native-video';
import {Icon} from 'react-native-vector-icons/FontAwesome5';

const {width} = Dimensions.get('window');

const CustomVideoPlayer = ({videoUrl, imageUrl}) => {
  const [paused, setPaused] = React.useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.videoPlayerContainer}>
        <Video
          paused={paused}
          ref={ref => (Video.player = ref)}
          source={{uri: videoUrl}}
          resizeMode="cover"
          poster={imageUrl}
          style={{...StyleSheet.absoluteFill}}
        />
        <View style={styles.overlay}></View>
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
});
