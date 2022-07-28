import React, { useCallback, memo } from 'react';
import { View, Text } from 'react-native';

import CustomButton from './custom-button';

const CustomEditButton = ({
  showModal,
  setCurrentSermonHTML,
  paraghHTML,
  editText,
  sermonParagId,
  devoParagId,
}) => {
  const onEditNotePress = useCallback(() => {
    if (sermonParagId && editText) {
      return showModal({
        sermonParagId: sermonParagId,
        sermonEditNote: editText,
        invokedBy: 'EditButton',
      });
    }
    if (devoParagId && editText) {
      return showModal({
        devoParagId: devoParagId,
        devoEditNote: editText,
        invokedBy: 'EditButton',
      });
    }
    showModal({
      sermonParagId: '',
      sermonEditNote: '',
      invokedBy: 'EditButton',
    });
  }, [editText, sermonParagId, showModal, devoParagId]);

  return (
    <View>
      <Text>{editText}</Text>
      <CustomButton
        title="Edit Note"
        onPress={onEditNotePress}
        setCurrentHTML={setCurrentSermonHTML}
        currentHTML={paraghHTML}
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
