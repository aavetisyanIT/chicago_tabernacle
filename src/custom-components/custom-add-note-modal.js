import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import database from '@react-native-firebase/database';
import ModalTextInput from './modal-text-input';

import CustomButton from './custom-button';
import CustomParagraphHtmlToText from './custom-paragraph-html-to-text-component';
import {AppContext} from './../context/app.context';

const CustomAddNoteModal = ({modalVisible, hideModal, placeholder, HTML}) => {
  const [userNote, setUserNote] = React.useState(''),
    [{currentParagraphId, currentArticleId, user, userUid}, dispatch] =
      React.useContext(AppContext),
    handleChangeText = text => setUserNote(text),
    onPressDoneButton = async () => {
      if (userNote) {
        try {
          const noteRef = database().ref(
            `/users/${userUid}/articles/${currentArticleId}/notes`,
          );
          noteRef.child(currentParagraphId).update({
            text: userNote,
          });
        } catch (error) {
          console.log('CustomAddNoteModal onPressDoneButton');
          console.log('Error: ', error.message);
        }
      }
      hideModal();
      setUserNote('');
    };

  return (
    <Modal
      isVisible={modalVisible}
      swipeDirection={['left', 'right', 'up', 'down']}
      onSwipeComplete={() => hideModal()}
      animationOutTiming={1200}
      animationInTiming={700}
      backdropTransitionOutTiming={0}
      onBackdropPress={() => hideModal()}>
      <View style={styles.modal}>
        {user ? (
          <>
            <CustomParagraphHtmlToText paragraphHtml={HTML} />
            <ModalTextInput
              placeholder={placeholder}
              value={userNote}
              onChangeText={text => handleChangeText(text)}
            />
            <CustomButton
              onPress={onPressDoneButton}
              title={'DONE'}
              style={styles.button}
              textStyle={styles.buttonText}
            />
          </>
        ) : (
          <>
            <Text style={styles.notLoggedInText}>You are not signed in</Text>
            <CustomButton
              onPress={hideModal}
              title={'OK'}
              style={styles.button}
              textStyle={styles.buttonText}
            />
          </>
        )}
      </View>
    </Modal>
  );
};

export default CustomAddNoteModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    opacity: 1,
    padding: 20,
    borderRadius: 2,
  },
  button: {
    display: 'flex',
    width: '90%',
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bc9665',
    margin: 15,
  },
  buttonText: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#fff',
  },
  notLoggedInText: {margin: 10, fontSize: 16},
});
