import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import CustomButton from './custom-button';

const AddNoteModal = ({modalVisible, hideModal}) => {
  return (
    <Modal
      isVisible={modalVisible}
      swipeDirection={['left', 'right', 'up', 'down']}
      onSwipeComplete={() => hideModal()}
      animationOutTiming={1200}
      animationInTiming={700}
      backdropTransitionOutTiming={0}>
      <View style={styles.modal}>
        <Text>Dynamic text</Text>
        <CustomButton onPress={hideModal} title={'DONE'} />
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
});
