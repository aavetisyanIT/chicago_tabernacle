import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const ModalTextInput = ({placeholder, value, onChangeText, style}) => {
  return (
    <TextInput
      mode="flat"
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, style]}
    />
  );
};

export default ModalTextInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    height: 50,
    backgroundColor: '#fff',
  },
});
