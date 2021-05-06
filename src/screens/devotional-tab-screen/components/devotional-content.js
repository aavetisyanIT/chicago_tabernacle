import React from 'react';
import {StyleSheet, View} from 'react-native';

import DevotionalParagraphText from './devotional-paragraph-text';

const DevotionalContent = ({item}) => {
  return (
    <View style={styles.container}>
      <DevotionalParagraphText itemText={item.text} />
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
