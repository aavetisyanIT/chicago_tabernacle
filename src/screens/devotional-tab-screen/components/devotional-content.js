import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';

import DevotionalParagraphText from './devotional-paragraph-text';

const DevotionalContent = ({item}) => {
  const contentWidth = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <DevotionalParagraphText itemText={item.text} />
      <HTML source={{html: item.text}} contentWidth={contentWidth} />
    </View>
  );
};

export default DevotionalContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  // button: {
  //   flexDirection: 'row',
  //   backgroundColor: '#fff',
  //   margin: 12,
  // },
  // buttonText: {color: '#b  c9665', fontSize: 14},
});
