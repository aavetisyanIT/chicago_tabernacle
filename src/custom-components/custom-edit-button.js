import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from './custom-button';

let count = 0;

const CustomEditButton = ({
  editText,
  showModal,
  setCurrentSermonHTML,
  paragraphHTML,
}) => {
  count++;
  // console.log('CustomEditButton: ', count);
  const onEditNotePress = React.useCallback(() => {
    showModal();
  }, [showModal]);
  return (
    <View>
      <Text>{editText}</Text>
      <CustomButton
        title="Edit Note"
        onPress={onEditNotePress}
        setCurrentHTML={setCurrentSermonHTML}
        currentHTML={paragraphHTML}
        icon="md-pencil"
        iconSize={18}
      />
    </View>
  );
};

export default CustomEditButton;
