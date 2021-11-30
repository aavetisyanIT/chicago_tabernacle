import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomButton from './../../../custom-components/custom-button';
import CustomParagraphHtmlToText from '../../../custom-components/custom-paragraph-html-to-text-component';

const DevotionalContent = ({item, showModal, setCurrentParagraphHTML}) => {
  return (
    <View style={styles.container}>
      <CustomParagraphHtmlToText paragraphHtml={item.text} />
      {item.allowNotes ? (
        <CustomButton
          title="Add Note"
          onPress={showModal}
          setCurrentHTML={setCurrentParagraphHTML}
          currentHTML={item.text}
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
    // margin: 12,
  },
  buttonText: {color: '#bc9665', fontSize: 15, marginHorizontal: 5},
});
