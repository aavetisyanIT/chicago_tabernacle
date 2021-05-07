import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import CustomAudioPlayer from '../../../custom-components/custom-audio-player';

const DevotionalHeader = ({headLine, imageUrl}) => {
  return (
    <View>
      <Image source={{uri: `${imageUrl}`}} style={styles.image} />
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
