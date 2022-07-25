import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from './custom-button';

function CustomEditButton({
  editText,
  showModal,
  setCurrentSermonHTML,
  paragraphHTML,
}) {
  const onEditNotePress = React.useCallback(() => {
    showModal(editText);
  }, [editText, showModal]);
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
}

export default CustomEditButton;
