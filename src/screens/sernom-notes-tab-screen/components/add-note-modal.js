import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import ModalTextInput from './modal-text-input';
import CustomButton from './../../../custom-components/custom-button';

const AddNoteModal = ({modalVisible, hideModal}) => {
  const [userNote, setUserNote] = React.useState('');
  const handleChangeText = text => {
    console.log(text);
  };
  return (
    <Modal
      isVisible={modalVisible}
      swipeDirection={['left', 'right', 'up', 'down']}
      onSwipeComplete={() => hideModal()}
      animationOutTiming={1200}
      animationInTiming={700}
      backdropTransitionOutTiming={0}>
      <View style={styles.modal}>
        {/* Need to add text of a current paragraph */}
        <Text>Dynamic text from sermon paragraph</Text>
        <ModalTextInput
          placeholder="Your Note"
          value={userNote}
          onChangeText={text => handleChangeText(text)}
        />
        <CustomButton
          onPress={hideModal}
          title={'DONE'}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>
    </Modal>
  );
};

export default AddNoteModal;

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
});
