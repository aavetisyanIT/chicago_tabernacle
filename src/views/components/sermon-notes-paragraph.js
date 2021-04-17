import React from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';

const SermonNotesParagraph = ({item}) => {
  const PARAGRAPHHTML = item.text;

  const contentWidth = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <HTML source={{html: PARAGRAPHHTML}} contentWidth={contentWidth} />
    </View>
  );
};

export default SermonNotesParagraph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  text: {},
});
