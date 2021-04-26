import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';

const DevotionalParagraph = ({item}) => {
  const contentWidth = useWindowDimensions().width;

  return (
    <View>
      <HTML source={{html: item.text}} contentWidth={contentWidth} />
    </View>
  );
};

export default DevotionalParagraph;

const styles = StyleSheet.create({});
