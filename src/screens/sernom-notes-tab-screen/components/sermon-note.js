import React from 'react';
import {View, StyleSheet} from 'react-native';
import SermonNoteParagraphText from './sermon-note-paragraph-text';

const SermonNote = ({item}) => {
  const PARAGRAPHHTML = item.text;

  return (
    <View style={styles.container}>
      <SermonNoteParagraphText PARAGRAPHHTML={PARAGRAPHHTML} />
    </View>
  );
};

export default SermonNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  text: {},
});
