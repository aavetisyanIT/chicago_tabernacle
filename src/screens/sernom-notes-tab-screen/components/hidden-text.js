import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const HiddenText = ({text, hiddenText}) => {
  const [isHiddenTextVisible, setIsHiddenTextVisible] = React.useState(false);
  const showHiddenText = () => setIsHiddenTextVisible(true);
  return (
    <Pressable onPress={showHiddenText}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {text.slice(0, -2)}
          {isHiddenTextVisible ? (
            hiddenText
          ) : (
            <View style={styles.textBlocker(hiddenText.length)}>
              <View style={styles.textBlockerInnerView} />
            </View>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default HiddenText;

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', flexWrap: 'wrap'},
  text: {color: 'lightblue', fontSize: 16},
  textBlocker: length => ({
    width: length * 8,
    height: 14,
    backgroundColor: 'lightgrey',
    paddingBottom: 2,
  }),
  textBlockerInnerView: {
    padding: 1,
    width: '100%',
    height: '90%',
    borderBottomColor: '#bc9665',
    borderBottomWidth: 1,
  },
});
