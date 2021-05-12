import React from 'react';
import {StyleSheet, View} from 'react-native';

import DevotionalParagraphText from './devotional-paragraph-text';
import CustomButton from './../../../custom-components/custom-button';

const DevotionalContent = ({item, showModal}) => {
  return (
    <View style={styles.container}>
      <DevotionalParagraphText itemText={item.text} />
      {item.allowNotes ? (
        <CustomButton
          title="Add Note"
          onPress={showModal}
          style={styles.button}
          textStyle={styles.buttonText}
          icon="md-pencil"
          iconSize={18}
        />
      ) : null}
    </View>
  );
};

export default DevotionalContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 12,
  },
  buttonText: {color: '#bc9665', fontSize: 14},
});