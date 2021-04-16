import React from 'react';
import {Text, View, StyleSheet, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';

const DevotionalTab = ({route}) => {
  const contentWidth = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <Text style={styles.headLine}>Devotional Tab</Text>
      {/* <HTML source={{html: null}} contentWidth={contentWidth} /> */}
    </View>
  );
};

export default DevotionalTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headLine: {fontFamily: 'Roboto-Medium'},
});
