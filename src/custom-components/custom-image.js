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
      resizeMode={FastImage.resizeMode.contain}
    />
  );
}

export default CustomImage;

const styles = StyleSheet.create({
  image: { height: 250, width: '100%' },
});
