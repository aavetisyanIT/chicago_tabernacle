import React, { useCallback, memo } from 'react';
import { View, Text } from 'react-native';

import CustomButton from './custom-button';

let count = 0;

const CustomEditButton = ({
  showModal,
  setCurrentSermonHTML,
  paragraphHTML,
  editText,
  sermonParagId,
}) => {
  count++;
  console.log('CustomEditButton: ', count);

  const onEditNotePress = useCallback(() => {
    if (sermonParagId && editText) {
      return showModal({
        sermonParagId: sermonParagId,
        sermonEditNote: editText,
        invokedBy: 'EditButton',
      });
    }
    showModal({
      sermonParagId: '',
      sermonEditNote: '',
      invokedBy: 'EditButton',
    });
  }, [editText, sermonParagId, showModal]);

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

const areEqual = (prevProps, nextProps) => {
  return nextProps.editText === prevProps.editText;
};

export default memo(CustomEditButton, areEqual);
