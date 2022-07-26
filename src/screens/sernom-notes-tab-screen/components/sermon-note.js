import React from 'react';
import { View, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';

import HiddenText from './hidden-text';
import CustomButton from '../../../custom-components/custom-button';
import CustomParagraphHtmlToText from '../../../custom-components/custom-paragraph-html-to-text-component';
import CustomImage from '../../../custom-components/custom-image';
import { AppContext } from '../../../context/app.context';
import { actionTypes } from '../../../context/action.types';
import CustomEditButton from '../../../custom-components/custom-edit-button';
let count = 0;

function SermonNote({
  item,
  showModal,
  setCurrentSermonHTML,
  editNoteText,
}) {
  count++;
  // console.log('SermonNote', count);

  console.log('editNoteText', editNoteText);

  const [{ userUid, currentSermonId }, dispatch] =
    React.useContext(AppContext);
  const [editText, setEditText] = React.useState('');

  let PARAGRAPHHTML = item.text;
  let paragraphContent = null;
  if (item.type === 'attributedText') {
    paragraphContent = (
      <CustomParagraphHtmlToText paragraphHtml={PARAGRAPHHTML} />
    );
  } else if (
    item.actionType === 'hiddenText' &&
    item.type === 'action'
  ) {
    paragraphContent = (
      <HiddenText text={item.text} hiddenText={item.actionString} />
    );
    // remove "%@" and add hidden text when open custom-add-note-modal for hidden-text component
    PARAGRAPHHTML = `${PARAGRAPHHTML.slice(0, -2)} ${
      item.actionString
    }`;
  } else if (item.type === 'image') {
    paragraphContent = <CustomImage url={item.mediaObject.url} />;
  }

  //get text for current note and set editText
  React.useEffect(() => {
    const setEditNoteText = async () => {
      try {
        const text = await database()
          .ref(
            `/users/${userUid}/articles/${currentSermonId}/notes/${item.id}`,
          )
          .once('value');
        if (text.val()) {
          return setEditText(text.val().text);
        }
        setEditText('');
      } catch (error) {
        console.log('SermonNote useEffect');
        console.log('Error: ', error.message);
      }
    };
    setEditNoteText();
  }, [userUid, currentSermonId, item, setEditText]);

  const onAddNotePress = () => {
    dispatch({
      type: actionTypes.SET_CURRENT_SERMON_PARAG_ID,
      payload: item.id,
    });
    showModal();
  };

  return (
    <View style={styles.container}>
      {paragraphContent}
      {item.allowNotes ? (
        editText ? (
          <CustomEditButton
            editText={editText}
            showModal={showModal}
            setCurrentSermonHTML={setCurrentSermonHTML}
            paragraphHTML={PARAGRAPHHTML}
          />
        ) : (
          <CustomButton
            title="Add Note"
            onPress={onAddNotePress}
            setCurrentHTML={setCurrentSermonHTML}
            currentHTML={PARAGRAPHHTML}
            style={styles.button}
            textStyle={styles.buttonText}
            icon="md-pencil"
            iconSize={18}
          />
        )
      ) : null}
    </View>
  );
}

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
  buttonText: { color: '#bc9665', fontSize: 15, marginHorizontal: 5 },
});
