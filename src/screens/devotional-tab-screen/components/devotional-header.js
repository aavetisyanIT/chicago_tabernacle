import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

//import CustomTrackPlayer from './../../../custom-components/custom-track-player';

const DevotionalHeader = ({headLine, imageUrl}) => {
  // const [audioPlayerVisible, setAudioPlayerVisible] = React.useState(false);
  // const showAudioPlayer = () => setAudioPlayerVisible(true);
  // const hideAudioPlayer = () => setAudioPlayerVisible(false);

  return (
    <View>
      <FastImage
        source={{uri: `${imageUrl}`, priority: FastImage.priority.normal}}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.headLine}>{headLine}</Text>
      {/* {audioPlayerVisible ? (
        <CustomTrackPlayer url={null} trackPlayerVisible={null} showTrackPlayer={null} />
      ) : (
        <CustomButton
          style={styles.audioButton}
          title="AUDIO PLAYER"
          textStyle={styles.audioButtonText}
          icon="volume-high-outline"
          iconSize={20}
          onPress={showAudioPlayer}
        />
      )} */}
    </View>
  );
};

export default DevotionalHeader;

const styles = StyleSheet.create({
  image: {height: 250, width: '100%'},
  headLine: {margin: 15, fontFamily: 'Roboto-Light', fontSize: 20},
  audioButton: {flexDirection: 'row', backgroundColor: '#fff', margin: 12},
  audioButtonText: {
    color: '#bc9665',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    marginHorizontal: 5,
  },
});
