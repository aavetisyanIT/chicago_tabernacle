import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

function CustomImage({ url }) {
  return (
    <FastImage
      source={{
        uri: url,
        priority: FastImage.priority.normal,
      }}
      style={styles.image}
      resizeMode={FastImage.resizeMode.stretch}
    />
  );
}

export default CustomImage;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
  },
});
