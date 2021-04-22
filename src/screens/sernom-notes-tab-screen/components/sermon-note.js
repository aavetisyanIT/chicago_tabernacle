import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddNote from './add-note';
import HiddenText from './hidden-text';
import SermonNoteParagraphText from './sermon-note-paragraph-text';

const SermonNote = ({item}) => {
  const PARAGRAPHHTML = item.text;

  let paragraphContent = null;
  if (item.actionType === 'button') {
    paragraphContent = (
      <SermonNoteParagraphText PARAGRAPHHTML={PARAGRAPHHTML} />
    );
  } else if (item.actionType === 'hiddenText') {
    paragraphContent = <HiddenText />;
  }
  return (
    <View style={styles.container}>
      {paragraphContent}
      {item.allowNotes ? <AddNote /> : null}
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
