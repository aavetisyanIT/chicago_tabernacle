import React from 'react';
import {View, StyleSheet} from 'react-native';

import HiddenText from './hidden-text';
import CustomButton from './../../../custom-components/custom-button';
import CustomParagraphHtmlToText from '../../../custom-components/custom-paragraph-html-to-text-component';
import CustomImage from '../../../custom-components/custom-image';

const SermonNote = ({item, showModal, setCurrentSermonHTML}) => {
  let PARAGRAPHHTML = item.text,
    paragraphContent = null;
  if (item.type === 'attributedText') {
    paragraphContent = (
      <CustomParagraphHtmlToText paragraphHtml={PARAGRAPHHTML} />
    );
  } else if (item.actionType === 'hiddenText' && item.type === 'action') {
    paragraphContent = (
      <HiddenText text={item.text} hiddenText={item.actionString} />
    );
    //remove "%@" and add hidden text when open custom-add-note-modal for hidden-text component
    PARAGRAPHHTML = `${PARAGRAPHHTML.slice(0, -2)} ${item.actionString}`;
  } else if (item.type === 'image') {
    paragraphContent = <CustomImage url={item.mediaObject.url} />;
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
    marginHorizontal: 15,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 5,
  },
  buttonText: {color: '#bc9665', fontSize: 15, marginHorizontal: 5},
});
