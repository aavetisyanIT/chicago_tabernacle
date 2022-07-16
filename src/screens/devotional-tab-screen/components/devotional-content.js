import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomButton from './../../../custom-components/custom-button';
import CustomParagraphHtmlToText from '../../../custom-components/custom-paragraph-html-to-text-component';
import {actionTypes} from './../../../context/action.types';
import {AppContext} from './../../../context/app.context';

const DevotionalContent = ({item, showModal, setCurrentParagraphHTML}) => {
  const [state, dispatch] = React.useContext(AppContext);

  React.useEffect(() => {
    if (item.allowNotes) {
      dispatch({
        type: actionTypes.SET_CURRENT_ARTICLE_ID,
        payload: item.id,
      });
    }
  }, []);

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
    marginHorizontal: 15,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 5,
  },
  buttonText: {color: '#bc9665', fontSize: 15, marginHorizontal: 5},
});
