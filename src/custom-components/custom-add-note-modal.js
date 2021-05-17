import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import HTML from 'react-native-render-html';

import ModalTextInput from './modal-text-input';
import CustomButton from './custom-button';

const CustomAddNoteModal = ({modalVisible, hideModal, placeholder, HTML}) => {
  const [userNote, setUserNote] = React.useState('');

  const handleChangeText = text => {
    console.log(text);
  };

  const contentWidth = useWindowDimensions().width;
  const renderers = {
    sup: ({__rawHtml}, children, convertedCSSStyles, passProps) => {
      return <Text style={null} key={passProps.key} html={__rawHtml} />;
    },
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
        <Text>{HTML}</Text>
        {/* <Text>
          <ScrollView style={{flex: 1}}>
            <HTML
              source={{
                html: HTML,
              }}
              contentWidth={contentWidth}
              renderers={renderers}
            />
          </ScrollView>
        </Text> */}

        <ModalTextInput
          placeholder={placeholder}
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
});
