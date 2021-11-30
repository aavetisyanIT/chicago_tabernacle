import React from 'react';
import {View, StyleSheet} from 'react-native';

import HiddenText from './hidden-text';
import CustomButton from './../../../custom-components/custom-button';
import CustomParagraphHtmlToText from '../../../custom-components/custom-paragraph-html-to-text-component';

const SermonNote = ({item, showModal, setCurrentSermonHTML}) => {
  let PARAGRAPHHTML = item.text;

  let paragraphContent = null;
  //doublecheck with Andrei on actionType === null
  if (item.actionType === 'button' || item.actionType === null) {
    paragraphContent = (
      <CustomParagraphHtmlToText paragraphHtml={PARAGRAPHHTML} />
    );
  } else if (item.actionType === 'hiddenText') {
    paragraphContent = (
      <HiddenText text={item.text} hiddenText={item.actionString} />
    );
    //remove "%@" and add hidden text when open custom-add-note-modal for hidden-text component
    PARAGRAPHHTML = `${PARAGRAPHHTML.slice(0, -2)} ${item.actionString}`;
  }
  return (
    <View style={styles.container}>
      {paragraphContent}
      {item.allowNotes ? (
        <CustomButton
          title="Add Note"
          onPress={showModal}
          setCurrentHTML={setCurrentSermonHTML}
          currentHTML={PARAGRAPHHTML}
          style={styles.button}
          textStyle={styles.buttonText}
          icon="md-pencil"
          iconSize={18}
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
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    // margin: 12,
  },
  buttonText: {color: '#bc9665', fontSize: 15, marginHorizontal: 5},
});
