import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

import CustomAudioPlayer from '../../../custom-components/custom-audio-player';

const DevotionalHeader = ({headLine, imageUrl}) => {
  return (
    <View>
      <FastImage
        source={{uri: `${imageUrl}`, priority: FastImage.priority.normal}}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.headLine}>{headLine}</Text>
      {/* CustomAudioPlayer is not working  */}
      <CustomAudioPlayer />
    </View>
  );
};

export default DevotionalHeader;

const styles = StyleSheet.create({
  image: {height: 250, width: '100%'},
  headLine: {margin: 15, fontFamily: 'Roboto-Light', fontSize: 20},
});
