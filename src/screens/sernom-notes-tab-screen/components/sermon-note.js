import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import HiddenText from './hidden-text';
import SermonNoteParagraphText from './sermon-note-paragraph-text';
import CustomButton from './custom-button';

const SermonNote = ({item, showModal}) => {
  const PARAGRAPHHTML = item.text;

  let paragraphContent = null;
  //doublecheck with Andrei on actionType === null
  if (item.actionType === 'button' || item.actionType === null) {
    paragraphContent = (
      <SermonNoteParagraphText PARAGRAPHHTML={PARAGRAPHHTML} />
    );
  } else if (item.actionType === 'hiddenText') {
    paragraphContent = <HiddenText />;
  }
  return (
    <View style={styles.container}>
      {paragraphContent}
      {item.allowNotes ? (
        <CustomButton
          title="Add note"
          onPress={showModal}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      ) : null}
    </View>
  );
};

export default SermonNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  button: {backgroundColor: '#fff'},
  buttonText: {color: '#bc9665'},
});
