import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CustomVideoPlayer = ({videoUrl, imageUrl}) => {
  return (
    <View style={styles.container}>
      <WebView
        javaScriptEnabled={true}
        allowsFullscreenVideo={true}
        style={{
          flex: 1,
          height: screenWidth * (9 / 16),
          width: screenWidth,
        }}
        source={{
          uri: videoUrl,
        }}
      />
    </View>
  );
};

export default CustomVideoPlayer;

const styles = StyleSheet.create({
  container: {flex: 1},
});
