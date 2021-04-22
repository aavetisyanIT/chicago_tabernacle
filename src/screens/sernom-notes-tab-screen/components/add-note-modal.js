import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import Modal from 'react-native-modal';

const AddNoteModal = ({modalVisible, hideModal}) => {
  return (
    <Modal
      isVisible={modalVisible}
      swipeDirection={['left', 'right', 'up', 'down']}
      onSwipeComplete={() => hideModal()}>
      <View style={styles.modal}>
        <Text>Dynamic text</Text>
        {/* Need a custom button to style */}
        <Pressable style={styles.modalButton} onPress={hideModal}>
          <Text>Done</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default AddNoteModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 1,
    padding: 20,
    borderRadius: 2,
  },
  modalButton: {backgroundColor: '#bc9665', margin: 15},
});
